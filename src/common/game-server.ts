import Prando from 'prando';
import {
  FogOfWar,
  RandomSpawner,
  TurnProcessor,
  viewGameStateAs,
} from './game-logic';
import {
  FogOfWarGameData,
  GameListData,
  GameLobbyData,
  GameSettingsData,
  GameStateData,
  PlayerStateData,
} from './game-state';
import { deepClone } from './utils';

/**
 * Represents a game server.
 */
export class GameServer {
  private readonly fogOfWar = new FogOfWar();
  private readonly spawner = new RandomSpawner();
  private readonly turnProcessor = new TurnProcessor();

  constructor(
    protected readonly games: {
      [key: string]: GameLobbyData | GameStateData;
    },
    protected readonly prando = new Prando(),
  ) {}

  protected async readState(
    name: string,
  ): Promise<GameLobbyData | GameStateData | undefined> {
    const result = this.games[name];
    return result ? deepClone(result) : undefined;
  }

  /**
   * Implementations of @see GameServer that persist data should override.
   */
  protected async writeState<T extends GameLobbyData | GameStateData>(
    name: string,
    data: T,
  ): Promise<T> {
    data = { ...deepClone(data), lastUpdated: this.currentTime() };
    return (this.games[name] = data);
  }

  /**
   * Implementations of @see GameServer that persist data should override.
   */
  protected async deleteState(name: string): Promise<void> {
    delete this.games[name];
  }

  /**
   * Returns the current timestamp.
   */
  protected currentTime(): number {
    return new Date().getTime();
  }

  /**
   * Maps and replaces the @see PlayerStateData for @param game/@param player.
   */
  protected async writePlayer(
    game: string,
    player: string,
    map: (data: PlayerStateData) => PlayerStateData,
  ): Promise<GameStateData | undefined> {
    const state = await this.readState(game);
    if (state && state.kind === 'Game') {
      for (let i = 0; i < state.players.length; i++) {
        if (state.players[i].userId === player) {
          state.players[i] = map(state.players[i]);
        }
      }
      return this.writeState(game, state);
    }
    // TODO: Handle this case.
    return;
  }

  /**
   * Processes a login request.
   *
   * Implementations that want authorization should override this method.
   */
  async onAccountLogin(): Promise<void> {
    // Intentionally left blank.
  }

  /**
   * Processes a game fetch request.
   */
  async onGamesFetch(
    player: string,
    name: string,
  ): Promise<GameLobbyData | GameListData | FogOfWarGameData | undefined> {
    for (const game of Object.values(this.games)) {
      if (game.name === name) {
        if (game.kind === 'Lobby') {
          return game;
        } else {
          return viewGameStateAs(game, player);
        }
      }
    }
  }

  /**
   * Processes a game list request.
   */
  async onGamesList(): Promise<GameListData[]> {
    return Object.values(this.games).map((value) => {
      return {
        name: value.name,
        kind: value.kind,
        lastUpdated: value.lastUpdated,
        players:
          typeof value.players === 'number'
            ? value.players
            : value.players.length,
      };
    });
  }

  /**
   * Processes a game creation request.
   */
  async onGamesCreate(
    player: string,
    request: {
      name: string;
      players: number;
    },
  ): Promise<GameLobbyData> {
    return this.writeState(request.name, {
      ...request,
      seed: this.prando.nextString(10),
      createdBy: player,
      kind: 'Lobby',
      lastUpdated: this.currentTime(),
    });
  }

  /**
   * Processes a game deletion request.
   *
   * @param _player
   * @param request
   */
  async onGamesDelete(
    _player: string,
    request: {
      name: string;
    },
  ): Promise<void> {
    // TODO: Enforce player created the game being deleted or is an admin.
    // TODO: Enforce the game exists.
    return this.deleteState(request.name);
  }

  /**
   * Processes a game start request.
   *
   * @param player
   * @param request
   */
  async onGamesStart(
    player: string,
    request: {
      name: string;
      seed: string;
      systems: number;
    },
  ): Promise<FogOfWarGameData> {
    // TODO: Enforce player created the game being started.
    // TODO: Enforce the game exists and hasn't already been started.
    // TODO: Enforce the player is in the game that is starting.
    // TODO: Enforce systems are valid.
    const pending = (await this.readState(request.name)) as GameLobbyData;
    // TODO: Support multiplayer.
    const players: PlayerStateData[] = [
      {
        name: 'Human',
        userId: 'Guest',
        fogOfWar: {} as FogOfWarGameData,
        serverAgent: false,
      },
      ...new Array(pending.players - 1).fill(null).map((_, i) => {
        return {
          name: `AI ${i + 1}`,
          userId: `ai-${i + 1}`,
          fogOfWar: {} as FogOfWarGameData,
          serverAgent: true,
        };
      }),
    ];
    // TODO: Allow customization of these settings.
    const settings: GameSettingsData = {
      initialFactories: 10,
      shipSpeedATurn: 4,
    };
    // TODO: Move all this logic into a logic class.
    const systems = this.spawner.spawnInitialSystems(
      new Prando(request.seed),
      request.systems,
      settings,
      players,
    );
    const initialState: GameStateData = {
      name: pending.name,
      lastUpdated: this.currentTime(),
      createdBy: player,
      currentTurn: 1,
      kind: 'Game',
      players,
      fleets: [],
      systems,
      settings,
    };
    const stateWithFogOfWar: GameStateData = {
      ...initialState,
      players: initialState.players.map((player) => {
        return {
          ...player,
          fogOfWar: this.fogOfWar.createInitialFogOfWar(
            initialState,
            player.serverAgent,
            player.userId,
          ),
        };
      }),
    };
    await this.writeState(request.name, stateWithFogOfWar);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return viewGameStateAs(stateWithFogOfWar, player)!;
  }

  /**
   * Processes an "end turn" request.
   */
  async onGameEndTurn(
    player: string,
    request: { name: string },
  ): Promise<void> {
    const result = await this.writePlayer(request.name, player, (data) => {
      return {
        ...data,
        fogOfWar: {
          ...data.fogOfWar,
          endedTurn: true,
        },
      };
    });
    if (result) {
      const processTurn = result.players.every((p) => p.fogOfWar.endedTurn);
      if (processTurn) {
        await this.writeState(
          request.name,
          this.turnProcessor.nextTurn(result),
        );
      }
    }
  }

  async onGameResign(player: string, request: { name: string }): Promise<void> {
    const result = await this.writePlayer(request.name, player, (data) => {
      return {
        ...data,
        serverAgent: true,
        fogOfWar: {
          ...data.fogOfWar,
          endedTurn: true,
        },
      };
    });
    if (result) {
      // TODO: Add this to the end-turn report for players.
      const terminateGame = result.players.every((p) => p.serverAgent);
      if (terminateGame) {
        await this.deleteState(request.name);
      } else {
        const processTurn = result.players.every((p) => p.fogOfWar.endedTurn);
        if (processTurn) {
          await this.writeState(
            request.name,
            this.turnProcessor.nextTurn(result),
          );
        }
      }
    }
  }

  async onGameScout(
    player: string,
    request: { game: string; target: string },
  ): Promise<
    | {
        type: 'Warship';
        origin: string;
        eta: number;
      }
    | { error: string }
  > {
    const game = await this.readState(request.game);
    if (!game) {
      return { error: `No game ${request.game} found` };
    }
    throw 'TODO';
  }
}
