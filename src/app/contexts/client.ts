import React from 'react';
import { GameClient } from '../../common/game-client';
import { GameServer } from '../../common/game-server';
import {
  FogOfWarGameData,
  GameListData,
  GameLobbyData,
  GameStateData,
} from '../../common/game-state';

export class LocalGameServer extends GameServer {
  constructor(private readonly storage = localStorage) {
    super(
      (() => {
        const result = storage.getItem('games');
        return result ? JSON.parse(result) : {};
      })(),
    );
  }

  protected async writeState<T extends GameLobbyData | GameStateData>(
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
  ): Promise<GameLobbyData | GameListData | FogOfWarGameData | undefined> {
    return this.server.onGamesFetch(this.player, name);
  }

  async gamesList(): Promise<GameListData[]> {
    return this.server.onGamesList();
  }

  async gamesDelete(name: string): Promise<void> {
    return this.server.onGamesDelete(this.player, { name });
  }

  async gamesCreate(name: string, players: number): Promise<GameLobbyData> {
    return this.server.onGamesCreate(this.player, { name, players });
  }

  async gamesStart(
    name: string,
    seed: string,
    systems: number,
  ): Promise<FogOfWarGameData> {
    return this.server.onGamesStart(this.player, { name, seed, systems });
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
