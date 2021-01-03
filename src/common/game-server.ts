import Prando from 'prando';
import { FogOfWar, RandomSpawner, viewGameStateAs } from './game-logic';
import {
  FogOfWarGameData,
  GameListData,
  GameLobbyData,
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
    return (this.games[name] = deepClone(data));
  }

  /**
   * Implementations of @see GameServer that persist data should override.
   */
  protected async deleteState(name: string): Promise<void> {
    delete this.games[name];
  }

  protected currentTime(): number {
    return new Date().getTime();
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
      { name: 'Human', userId: 'Guest', fogOfWar: {} as FogOfWarGameData },
      ...new Array(pending.players - 1).fill(null).map((_, i) => {
        return {
          name: `AI ${i + 1}`,
          userId: `ai-${i + 1}`,
          fogOfWar: {} as FogOfWarGameData,
        };
      }),
    ];
    const systems = this.spawner.spawnInitialSystems(
      new Prando(request.seed),
      request.systems,
      players,
    );
    const initialState: GameStateData = {
      name: pending.name,
      lastUpdated: this.currentTime(),
      createdBy: player,
      kind: 'Game',
      players,
      systems,
      settings: {
        // TODO: Allow customization of these settings.
        initialFactories: 10,
        shipSpeedATurn: 4,
      },
    };
    const stateWithFogOfWar: GameStateData = {
      ...initialState,
      players: initialState.players.map((player) => {
        return {
          ...player,
          fogOfWar: this.fogOfWar.createInitialFogOfWar(
            initialState,
            // TODO: Do a more proper encoding.
            player.userId.startsWith('ai-'),
            player.userId,
          ),
        };
      }),
    };
    console.log(stateWithFogOfWar);
    await this.writeState(request.name, stateWithFogOfWar);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return viewGameStateAs(stateWithFogOfWar, player)!;
  }
}
