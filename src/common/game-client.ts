import { FogOfWarGameData, GameListData, GameLobbyData } from './game-state';

/**
 * Represents a connection to a game server.
 */
export abstract class GameClient {
  /**
   * Logs in the user.
   */
  abstract accountLogin(): Promise<void>;

  /**
   * Logs out the user.
   */
  abstract accountLogout(): Promise<void>;

  /**
   * Fetches a single game.
   */
  abstract gamesFetch(
    name: string,
  ): Promise<FogOfWarGameData | GameListData | undefined>;

  /**
   * Lists active games.
   */
  abstract gamesList(): Promise<GameListData[]>;

  /**
   * Deletes a game.
   */
  abstract gamesDelete(name: string): Promise<void>;

  /**
   * Creates a game (lobby).
   */
  abstract gamesCreate(name: string, players: number): Promise<GameLobbyData>;

  /**
   * Starts a game.
   */
  abstract gamesStart(
    name: string,
    seed: string,
    systems: number,
  ): Promise<FogOfWarGameData>;

  /**
   * Ends your turn.
   */
  abstract gameEndTurn(name: string): Promise<void>;

  /**
   * Resigns from the game.
   */
  abstract gameResign(name: string): Promise<void>;
}
