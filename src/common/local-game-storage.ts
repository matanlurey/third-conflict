import { GameLobbyData } from './game-lobby';

export class LocalGameStorage {
  public readonly lobbies: GameLobbyData[];

  constructor() {
    const lobbyData = localStorage.getItem('lobbies') || '[]';
    const lobbies: GameLobbyData[] = [];
    try {
      const decodedLobby = JSON.parse(lobbyData);
      lobbies.push(...decodedLobby);
    } catch (_) {
    } finally {
      this.lobbies = lobbies;
    }
  }

  private writeChanges(): void {
    localStorage.setItem('lobbies', JSON.stringify(this.lobbies));
  }

  add(data: GameLobbyData): void {
    this.lobbies.push(data);
    this.writeChanges();
  }

  get(name: string): GameLobbyData | undefined {
    for (const lobby of this.lobbies) {
      if (lobby.name === name) {
        return lobby;
      }
    }
  }

  remove(name: string): void {
    for (let i = 0; i < this.lobbies.length; i++) {
      if (this.lobbies[i].name === name) {
        this.lobbies.splice(i, 1);
        break;
      }
    }
    this.writeChanges();
  }
}
