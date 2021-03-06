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
   * Which player created and administrates the game.
   */
  readonly createdBy: string;

  /**
   * Current turn number.
   */
  readonly currentTurn: number;

  /**
   * Players in the game.
   */
  readonly players: PlayerStateData[];

  /**
   * Systems in the game.
   */
  readonly systems: SystemData[];

  /**
   * Fleets in the game.
   */
  readonly fleets: TransitFleetData[];

  /**
   * Type of game saved data.
   */
  readonly kind: 'Game';

  /**
   * Settings in the game.
   */
  readonly settings: GameSettingsData;
}

/**
 * Represents settings in the game.
 */
export interface GameSettingsData {
  /**
   * How many factories initial systems start with.
   *
   * The more factories the faster a system can churn out units. This number
   * is also used as the maximum number of factories that an imperial system
   * will build.
   */
  readonly initialFactories: number;

  /**
   * How many units of distance a ship moves a turn, maximum.
   *
   * The faster the speed the farther ships can make it every "tick" of the game.
   */
  readonly shipSpeedATurn: number;
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

  /**
   * Whether this player is run by a server-driven agent.
   */
  readonly serverAgent: boolean;

  /**
   * A view of the game revealed to the player.
   */
  readonly fogOfWar: FogOfWarGameData;
}

/**
 * Represents a player's view of @see GameStateData.
 */
export interface FogOfWarGameData {
  /**
   * @see GameStateData.kind.
   */
  readonly kind: 'Game';

  /**
   * @see GameStateData.name.
   */
  readonly name: string;

  /**
   * @see GameStateData.players.
   */
  readonly players: number;

  /**
   * @see GameStateData.currentTurn.
   */
  readonly currentTurn: number;

  /**
   * Whether player ended their turn.
   */
  readonly endedTurn: boolean;

  /**
   * Fleets belonging to the current player; @see GameStateData.fleets.
   */
  readonly fleets: TransitFleetData[];

  /**
   * @see GameStateData.systems.
   */
  readonly systems: FogOfWarSystemData[];
}

/**
 * How a @see SystemData is seen by another player.
 */
export type HudIndicatorTag = 'Self' | 'Empire' | 'Enemy' | undefined;

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
export type OwnerData = 'Empire' | { player: string };

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
   * The userId of the which player this is a home system of.
   */
  readonly home: OwnerData;

  /**
   * The userId of which player controls the system.
   *
   * Note, this may conflict with @member home or individual planet control.
   */
  readonly owner: OwnerData;

  /**
   * Orbiting fleet controlled by @member owner.
   */
  readonly orbit: FleetData;

  /**
   * Number of factories present in the system.
   */
  readonly factories: number;

  /**
   * Planets in the system.
   */
  readonly planets: PlanetData[];
}

/**
 * Represents a planet in a star system.
 */
export interface PlanetData {
  /**
   * Unique ID.
   */
  readonly guid: string;

  /**
   * Troops garrisoned on the planet.
   */
  readonly troops: number;

  /**
   * Number of troops recruited per turn.
   */
  readonly recruit: number;

  /**
   * Morale of the planet.
   */
  readonly morale: number;

  /**
   * Owner of the planet.
   */
  readonly owner: OwnerData;
}

/**
 * Represents a player's view of @see SystemData.
 */
export interface FogOfWarSystemData {
  /**
   * @see SystemData.name.
   */
  readonly name: string;

  /**
   * @see SystemData.position.
   */
  readonly position: PointData;

  /**
   * @see HudIndicatorTag.
   */
  readonly status: HudIndicatorTag;

  /**
   * Number of factories present in the system.
   *
   * If `undefined`, then it is unknown to the current player.
   */
  readonly factories?: number;

  /**
   * Fleet information that is disclosed, if anything.
   */
  readonly orbit: Partial<FleetData>;

  /**
   * @see GameStateData.planets.
   */
  readonly planets?: Partial<PlanetData>[];
}

/**
 * Represents a collection of ships.
 */
export interface FleetData {
  /**
   * WarShips that are part of this fleet.
   */
  readonly warships: number;

  /**
   * Transports that are part of this fleet.
   */
  readonly transports: number;

  /**
   * Troops that are on board @member transports.
   */
  readonly troops: number;
}

export interface TransitFleetData {
  /**
   * Unique ID.
   */
  readonly guid: string;

  /**
   * Type of movement.
   */
  readonly mission: 'Scout' | 'Transfer' | 'Conquest';

  /**
   * Which units are included in the fleet.
   */
  readonly fleet: FleetData;

  /**
   * Controlling player.
   */
  readonly owner: OwnerData;

  /**
   * Source system (by name).
   */
  readonly source: string;

  /**
   * Destination system (by name).
   */
  readonly destination: string;

  /**
   * Number of turns moved.
   */
  readonly movement: number;
}

export class TransitFleet {
  constructor(readonly data: TransitFleetData) {}

  computeEtaInTurns(game: GameStateData | FogOfWarGameData): number {
    let source: SystemData | FogOfWarSystemData | undefined;
    let target: SystemData | FogOfWarSystemData | undefined;
    for (const s of game.systems) {
      if (s.name === this.data.source) {
        source = s;
        continue;
      }
      if (s.name === this.data.destination) {
        target = s;
        continue;
      }
    }
    if (!source || !target) {
      throw new Error(`Unexpected fleet data: ${this.data}`);
    }
    // TODO: Take a settings object instead.
    const perTurn = 4;
    const distance = new Point(source.position).distance(
      new Point(target.position),
    );
    const movedSoFar = this.data.movement * perTurn;
    const stillNeeded = distance - movedSoFar;
    if (stillNeeded <= 1) {
      return 1;
    } else {
      return stillNeeded / perTurn;
    }
  }
}
