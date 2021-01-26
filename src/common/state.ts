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

export interface LobbyState {
  /**
   * Name of the game.
   */
  name: string;

  /**
   * Used to procedurally generate the map and empire.
   */
  seed: string;

  /**
   * Which player created the lobby.
   */
  createdBy: string;

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
  get createdBy(): string {
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

export interface GameState {
  /**
   * Name of the game.
   */
  name: string;

  /**
   * Which player created the game.
   */
  createdBy: string;

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
  get createdBy(): string {
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

  get settings(): Settings {
    return new Settings(this.state.settings);
  }

  /**
   * Players in the game.
   */
  get players(): Player[] {
    return this.state.players.map((p) => new Player(p));
  }
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
