import { deepClone } from './utils';

export abstract class Entity<TState, TEntity extends Entity<TState, TEntity>> {
  constructor(protected readonly state: Readonly<TState>) {}

  /**
   * Returns a copy of the @member state representing this entity.
   */
  copyState(): TState {
    return deepClone(this.state);
  }

  /**
   * Returns a copy of this entity with @param merge shallow-merged within.
   */
  copyWith(merge: Partial<TState> = {}): TEntity {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const C = this.constructor as any;
    return new C({ ...this.copyState(), merge });
  }
}

/**
 * Base state properties for reference to an @see Entity.
 */
export interface ReferenceKind {
  /**
   * Discriminator.
   */
  kind: 'Fleet' | 'Game' | 'Lobby' | 'Planet' | 'Player' | 'System';
}

/**
 * References to known entity types.
 */
export type Reference =
  | GameReference
  | LobbyReference
  | PlanetReference
  | PlayerReference
  | SystemReference;

export interface PlayerState {
  /**
   * Unique name of the player.
   */
  name: string;

  /**
   * Whether this player is a server-based agent.
   */
  agent: boolean;
}

export class Player extends Entity<PlayerState, Player> {
  /**
   * Unique name of the player.
   */
  get name(): string {
    return this.state.name;
  }

  /**
   * Whether this player is a server-based agent.
   */
  get isAgent(): boolean {
    return this.state.agent;
  }
}

export interface PlayerReference extends ReferenceKind {
  kind: 'Player';
  name: string;
}

export interface LobbyState {
  /**
   * Name of the game.
   */
  name: string;

  /**
   * Tagged type of listing.
   */
  kind: 'Lobby';

  /**
   * Used to procedurally generate the map and empire.
   */
  seed: string;

  /**
   * Which player created the lobby.
   */
  createdBy: PlayerReference;

  /**
   * When the lobby was last updated.
   */
  lastUpdated: number;

  /**
   * Maximum number of players supported.
   */
  maxPlayers: number;
}

export class Lobby extends Entity<LobbyState, Lobby> {
  /**
   * Name of the game.
   */
  get name(): string {
    return this.state.name;
  }

  /**
   * Used to procedurally generate the map and empire.
   */
  get seed(): string {
    return this.state.seed;
  }

  /**
   * Which player created the lobby.
   */
  get createdBy(): PlayerReference {
    return this.state.createdBy;
  }

  /**
   * When the lobby was last updated.
   */
  get lastUpdated(): number {
    return this.state.lastUpdated;
  }

  /**
   * Maximum number of players supported.
   */
  get maxPlayers(): number {
    return this.state.maxPlayers;
  }
}

export interface LobbyReference extends ReferenceKind {
  kind: 'Lobby';
  name: string;
}

export interface FogOfWarState {
  systems: PartialSystemState[];
}

export interface GameState {
  /**
   * Name of the game.
   */
  name: string;

  /**
   * Tagged type of listing.
   */
  kind: 'Game';

  /**
   * Which player created the game.
   */
  createdBy: PlayerReference;

  /**
   * When the lobby was last updated.
   */
  lastUpdated: number;

  /**
   * Current turn number.
   */
  currentTurn: number;

  /**
   * Game settings.
   */
  settings: SettingsState;

  /**
   * Players in the game.
   */
  players: PlayerState[];

  /**
   * Systems in the game.
   */
  systems: SystemState[];

  /**
   * Cached fog of war view of the world keyed by player name.
   */
  fogOfWar: {
    [key: string]: FogOfWarState | undefined;
  };
}

export class Game extends Entity<GameState, Game> {
  /**
   * Name of the game.
   */
  get name(): string {
    return this.state.name;
  }

  /**
   * Which player created the game.
   */
  get createdBy(): PlayerReference {
    return this.state.createdBy;
  }

  /**
   * When the lobby was last updated.
   */
  get lastUpdated(): number {
    return this.state.lastUpdated;
  }

  /**
   * Current turn number.
   */
  get currentTurn(): number {
    return this.state.currentTurn;
  }

  /**
   * Configured settings.
   */
  get settings(): Settings {
    return new Settings(this.state.settings);
  }

  /**
   * Players in the game.
   */
  get players(): Player[] {
    return this.state.players.map((p) => new Player(p));
  }

  /**
   * Systems in the game.
   */
  get systems(): System[] {
    return this.state.systems.map((s) => new System(s));
  }
}

export interface GameReference extends ReferenceKind {
  kind: 'Game';
  name: string;
}

export interface SettingsState {
  /**
   * How many factories initial systems start with.
   *
   * The more factories the faster a system can churn out units. This number
   * is also used as the maximum number of factories that an imperial system
   * will build.
   */
  initialFactories: number;

  /**
   * How many units of distance a ship moves a turn, maximum.
   *
   * The faster the speed the farther ships can make it every "tick" of the game.
   */
  shipSpeedATurn: number;
}

export interface GameListingState {
  /**
   * Reference to the game (or lobby).
   */
  reference: LobbyReference | GameReference;

  /**
   * Number of players in the game, or the max number of players if a lobby.
   */
  players: number;

  /**
   * Last updated timestamp.
   */
  lastUpdated: number;
}

export class GameListing extends Entity<GameListingState, GameListing> {
  /**
   * Reference to the game (or lobby).
   */
  get reference(): LobbyReference | GameReference {
    return this.state.reference;
  }

  /**
   * Number of players in the game, or the max number of players if a lobby.
   */
  get players(): number {
    return this.state.players;
  }

  /**
   * Last updated timestamp.
   */
  get lastUpdated(): number {
    return this.state.lastUpdated;
  }
}

export class Settings extends Entity<SettingsState, Settings> {
  /**
   * How many factories initial systems start with.
   *
   * The more factories the faster a system can churn out units. This number
   * is also used as the maximum number of factories that an imperial system
   * will build.
   */
  get initialFactories(): number {
    return this.state.initialFactories;
  }

  /**
   * How many units of distance a ship moves a turn, maximum.
   *
   * The faster the speed the farther ships can make it every "tick" of the game.
   */
  get shipSpeedATurn(): number {
    return this.state.shipSpeedATurn;
  }
}

/**
 * Represents an `{X, Y}` coordinate pair.
 */
export type PointState = [number, number];

export class Point extends Entity<PointState, Point> {
  /**
   * X-coordinate.
   */
  get x(): number {
    return this.state[0];
  }

  /**
   * Y-coordinate.
   */
  get y(): number {
    return this.state[1];
  }
}

/**
 * Represents a star system.
 */
export interface SystemState {
  /**
   * Position of the system within the sector.
   */
  position: PointState;

  /**
   * Name of the system.
   */
  name: string;

  /**
   * Whether this is @member owner's home system.
   */
  home: boolean;

  /**
   * Owning player, or "'Empire'" if not controlled by a player.
   */
  owner: PlayerReference | 'Empire';

  /**
   * Orbiting fleet controlled by @member owner.
   */
  orbit: FleetState;

  /**
   * Number of factories present in the system.
   */
  factories: number;

  /**
   * Planets in the system.
   */
  planets: PlanetState[];
}

export interface SystemReference extends ReferenceKind {
  kind: 'System';
  name: string;
}

export class System extends Entity<SystemState, System> {
  /**
   * Position of the system within the sector.
   */
  get position(): Point {
    return new Point(this.state.position);
  }

  /**
   * Name of the system.
   */
  get name(): string {
    return this.state.name;
  }

  /**
   * Whether this is @member owner's home system.
   */
  get home(): boolean {
    return this.state.home;
  }

  /**
   * Owning player, or "'Empire'" if not controlled by a player.
   */
  get owner(): PlayerReference | 'Empire' {
    return this.state.owner;
  }

  /**
   * Orbiting fleet controlled by @member owner.
   */
  get orbit(): Fleet {
    return new Fleet(this.state.orbit);
  }

  /**
   * Number of factories present in the system.
   */
  get factories(): number {
    return this.state.factories;
  }

  /**
   * Planets in the system.
   */
  get planets(): Planet[] {
    return this.state.planets.map((p) => new Planet(p));
  }
}

export interface FleetState {
  /**
   * WarShips that are part of this fleet.
   */
  warships: number;

  /**
   * Transports that are part of this fleet.
   */
  transports: number;

  /**
   * Troops that are on board @member transports.
   */
  troops: number;
}

export class Fleet extends Entity<FleetState, Fleet> {
  /**
   * WarShips that are part of this fleet.
   */
  get warships(): number {
    return this.state.warships;
  }

  /**
   * Transports that are part of this fleet.
   */
  get transports(): number {
    return this.state.transports;
  }

  /**
   * Troops that are on board @member transports.
   */
  get troops(): number {
    return this.state.troops;
  }
}

export interface PlanetState {
  /**
   * Unique ID.
   */
  guid: string;

  /**
   * Troops garrisoned on the planet.
   */
  troops: number;

  /**
   * Number of troops recruited per turn.
   */
  recruit: number;

  /**
   * Morale of the planet.
   */
  morale: number;

  /**
   * Owner of the planet.
   */
  owner: PlayerReference | 'Empire';
}

export class Planet extends Entity<PlanetState, Planet> {
  /**
   * Unique ID.
   */
  get guid(): string {
    return this.state.guid;
  }

  /**
   * Troops garrisoned on the planet.
   */
  get troops(): number {
    return this.state.troops;
  }

  /**
   * Number of troops recruited per turn.
   */
  get recruit(): number {
    return this.state.recruit;
  }

  /**
   * Morale of the planet.
   */
  get morale(): number {
    return this.state.morale;
  }

  /**
   * Owner of the planet.
   */
  get owner(): PlayerReference | 'Empire' {
    return this.state.owner;
  }
}

export interface PlanetReference extends ReferenceKind {
  kind: 'Planet';
  guid: string;
}

/**
 * Represents a partial view of a @see SystemState, i.e. for fog of war.
 */
export interface PartialSystemState {
  /**
   * Position of the system within the sector.
   */
  position: PointState;

  /**
   * Name of the system.
   */
  name: string;

  /**
   * Whether this is @member owner's home system.
   */
  home: boolean;

  /**
   * Owning player, or "'Empire'" if not controlled by a player.
   *
   * If undefined it is not known.
   */
  owner?: PlayerReference | 'Empire';

  /**
   * Orbiting fleet controlled by @member owner.
   */
  orbit: Partial<FleetState>;

  /**
   * Number of factories present in the system.
   *
   * If undefined it is not known.
   */
  factories?: number;

  /**
   * Planets in the system.
   */
  planets: Partial<PlanetState>[];
}

export class PartialSystem extends Entity<PartialSystemState, PartialSystem> {
  /**
   * Position of the system within the sector.
   */
  get position(): Point {
    return new Point(this.state.position);
  }

  /**
   * Name of the system.
   */
  get name(): string {
    return this.state.name;
  }

  /**
   * Whether this is @member owner's home system.
   */
  get home(): boolean {
    return this.state.home;
  }

  /**
   * Owning player, or "'Empire'" if not controlled by a player.
   *
   * If undefined it is not known.
   */
  get owner(): PlayerReference | 'Empire' | undefined {
    return this.state.owner;
  }

  /**
   * Orbiting fleet controlled by @member owner.
   */
  get orbit(): PartialFleet {
    return new PartialFleet(this.state.orbit);
  }

  /**
   * Number of factories present in the system.
   *
   * If undefined it is not known.
   */
  get factories(): number | undefined {
    return this.state.factories;
  }
}

export class PartialFleet extends Entity<Partial<FleetState>, PartialFleet> {
  /**
   * WarShips that are part of this fleet.
   */
  get warships(): number | undefined {
    return this.state.warships;
  }

  /**
   * Transports that are part of this fleet.
   */
  get transports(): number | undefined {
    return this.state.transports;
  }

  /**
   * Troops that are on board @member transports.
   */
  get troops(): number | undefined {
    return this.state.troops;
  }
}

export class PartialPlanet extends Entity<
  Partial<PlanetState> & { guid: string },
  PartialPlanet
> {
  /**
   * Unique ID.
   */
  get guid(): string {
    return this.state.guid;
  }

  /**
   * Troops garrisoned on the planet.
   */
  get troops(): number | undefined {
    return this.state.troops;
  }

  /**
   * Number of troops recruited per turn.
   */
  get recruit(): number | undefined {
    return this.state.recruit;
  }

  /**
   * Morale of the planet.
   */
  get morale(): number | undefined {
    return this.state.morale;
  }

  /**
   * Owner of the planet.
   */
  get owner(): PlayerReference | 'Empire' | undefined {
    return this.state.owner;
  }
}

export type PartialGameState = GameState & {
  kind: 'Game';
  systems: PartialSystemState[];
};

export class PartialGame extends Entity<PartialGameState, PartialGame> {
  /**
   * Name of the game.
   */
  get name(): string {
    return this.state.name;
  }

  /**
   * Which player created the game.
   */
  get createdBy(): PlayerReference {
    return this.state.createdBy;
  }

  /**
   * When the lobby was last updated.
   */
  get lastUpdated(): number {
    return this.state.lastUpdated;
  }

  /**
   * Current turn number.
   */
  get currentTurn(): number {
    return this.state.currentTurn;
  }

  /**
   * Configured settings.
   */
  get settings(): Settings {
    return new Settings(this.state.settings);
  }

  /**
   * Players in the game.
   */
  get players(): Player[] {
    return this.state.players.map((p) => new Player(p));
  }

  /**
   * Systems in the game.
   */
  get systems(): PartialSystem[] {
    return this.state.systems.map((s) => new PartialSystem(s));
  }
}
