/**
 * Represents the complete game state at a point of time.
 */
export interface GameStateData {
  /**
   * Name of the game, used for matchmaking and reference purposes.
   */
  readonly name: string;

  /**
   * Whether the game is played online or offline.
   */
  readonly online: boolean;

  /**
   * Last updated timestamp.
   */
  readonly lastUpdate: number;

  /**
   * Players in the game.
   */
  readonly players: PlayerStateData[];

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
