export interface GameLobbyData {
  /**
   * Name of the game, used for matchmaking and reference purposes.
   */
  readonly name: string;

  /**
   * Number of players.
   */
  readonly players: number;

  /**
   * Whether the game is played online or offline.
   */
  readonly online: boolean;

  /**
   * Last updated timestamp.
   */
  readonly lastUpdate: number;

  /**
   * Type of game saved data.
   */
  readonly kind: 'Lobby';
}
