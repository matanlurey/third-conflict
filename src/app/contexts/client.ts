import React from 'react';
import { GameClient } from '../../common/game-client';
import { GameServer } from '../../common/game-server';
import {
  GameListing,
  GameState,
  Lobby,
  LobbyState,
  PartialGame,
} from '../../common/state';

export class LocalGameServer extends GameServer {
  constructor(private readonly storage = localStorage) {
    super(
      (() => {
        const result = storage.getItem('games');
        return result ? JSON.parse(result) : {};
      })(),
    );
  }

  protected async writeState<T extends LobbyState | GameState>(
    name: string,
    data: T,
  ): Promise<T> {
    const result = await super.writeState(name, data);
    this.storage.setItem('games', JSON.stringify(this.games));
    return result;
  }

  protected async deleteState(name: string): Promise<void> {
    await super.deleteState(name);
    this.storage.setItem('games', JSON.stringify(this.games));
  }
}

export class LocalGameClient extends GameClient {
  constructor(
    private player: string = 'Guest',
    private readonly server: GameServer = new LocalGameServer(),
  ) {
    super();
  }

  async accountLogin(): Promise<void> {
    // Intentionally left blank.
  }

  async accountLogout(): Promise<void> {
    // Intentionally left blank.
  }

  async gamesFetch(
    name: string,
  ): Promise<PartialGame | Lobby | GameListing | undefined> {
    const state = await this.server.onGamesFetch(this.player, name);
    if (!state) {
      return;
    }
    switch (state?.kind) {
      case 'Game':
        return new PartialGame(state);
      case 'Lobby':
        return new Lobby(state);
      default:
        return new GameListing(state);
    }
  }

  async gamesList(): Promise<GameListing[]> {
    const state = await this.server.onGamesList();
    return state.map((s) => new GameListing(s));
  }

  async gamesDelete(name: string): Promise<void> {
    return this.server.onGamesDelete(this.player, { name });
  }

  async gamesCreate(name: string, players: number): Promise<Lobby> {
    const state = await this.server.onGamesCreate(this.player, {
      name,
      players,
    });
    return new Lobby(state);
  }

  async gamesStart(
    name: string,
    seed: string,
    systems: number,
  ): Promise<PartialGame> {
    const state = await this.server.onGamesStart(this.player, {
      name,
      seed,
      systems,
    });
    return new PartialGame(state);
  }

  async gameEndTurn(name: string): Promise<void> {
    return this.server.onGameEndTurn(this.player, { name });
  }

  async gameResign(name: string): Promise<void> {
    return this.server.onGameResign(this.player, { name });
  }
}

export const GameClientContext = React.createContext<GameClient>(
  new LocalGameClient(),
);
