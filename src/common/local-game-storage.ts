import { GameLobbyData } from './game-lobby';
import { GameStateData } from './game-state';

export class LocalGameStorage {
  public readonly games: (GameStateData | GameLobbyData)[];

  constructor() {
    const data = localStorage.getItem('games') || '[]';
    try {
      this.games = JSON.parse(data);
    } catch (e) {
      console.warn(e);
      this.games = [];
    }
  }

  protected writeChanges(): void {
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  set(data: GameLobbyData | GameStateData): void {
    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].name === data.name) {
        this.games[i] = {
          ...data,
          lastUpdate: new Date().getTime(),
        };
        this.writeChanges();
        return;
      }
    }
    this.games.push(data);
    this.writeChanges();
  }

  get(name: string): GameLobbyData | GameStateData | undefined {
    for (const lobby of this.games) {
      if (lobby.name === name) {
        return lobby;
      }
    }
  }

  remove(name: string): void {
    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].name === name) {
        this.games.splice(i, 1);
        break;
      }
    }
    this.writeChanges();
  }
}
