/**
 * Represents minimal information about a game for listing purposes.
 */
export interface GameListData {
  /**
   * Name of the game, used for matchmaking and reference purposes.
   */
  readonly name: string;

  /**
   * Number of players.
   */
  readonly players: number;

  /**
   * Last updated timestamp.
   */
  readonly lastUpdated: number;

  /**
   * Type of game saved data.
   */
  readonly kind: 'Lobby' | 'Game';
}

/**
 * Represents a game that has not yet been started.
 */
export interface GameLobbyData {
  /**
   * Name of the game, used for matchmaking and reference purposes.
   */
  readonly name: string;

  /**
   * Used to procedurally generate the map and empire.
   */
  readonly seed: string;

  /**
   * Which player created and administrates the game.
   */
  readonly createdBy: string;

  /**
   * Last updated timestamp.
   */
  readonly lastUpdated: number;

  /**
   * Number of players.
   */
  readonly players: number;

  /**
   * Type of game saved data.
   */
  readonly kind: 'Lobby';
}

/**
 * Represents the complete game state at a point of time.
 */
export interface GameStateData {
  /**
   * Name of the game, used for matchmaking and reference purposes.
   */
  readonly name: string;

  /**
   * Last updated timestamp.
   */
  readonly lastUpdated: number;

  /**
   * Players in the game.
   */
  readonly players: PlayerStateData[];

  /**
   * Systems in the game.
   */
  readonly systems: SystemData[];

  /**
   * Type of game saved data.
   */
  readonly kind: 'Game';
}

/**
 * Represents the state of a player within a game.
 */
export interface PlayerStateData {
  /**
   * Name of the player.
   */
  readonly name: string;

  /**
   * User ID of the player (guaranteed unique).
   */
  readonly userId: string;
}

/**
 * Represents an {X, Y} coordinate pair.
 */
export type PointData = [number, number];

/**
 * A helper class for wrapping and manipulating @see {PointData} instances.
 */
export class Point {
  constructor(private readonly data: PointData) {}

  get x(): number {
    return this.data[0];
  }

  get y(): number {
    return this.data[1];
  }

  distance(to: Point | PointData): number {
    const [x1, y1] = [this.x, this.y];
    const [x2, y2] = to instanceof Array ? to : [to.x, to.y];
    return parseFloat(
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2),
    );
  }
}

/**
 * Represents a "tag" for control of an entity.
 */
export type OwnerData = 'empire' | { player: string };

/**
 * Represents a star system.
 */
export interface SystemData {
  /**
   * Position of the system.
   */
  readonly position: PointData;

  /**
   * Name of the system.
   */
  readonly name: string;

  /**
   * If defined, the userId of the which player this is a home system of.
   */
  readonly home: OwnerData | undefined;

  /**
   * The userId of which player controls the system.
   *
   * Note, this may conflict with @member home or individual planet control.
   */
  readonly owner: OwnerData;
}
