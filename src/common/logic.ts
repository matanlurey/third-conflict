import Prando from 'prando';
import {
  FogOfWarState,
  Game,
  PartialSystem,
  PartialSystemState,
  PlayerReference,
  Settings,
  System,
  SystemState,
} from './state';

/**
 * Sub-system that generates fog-of-war views of game entities.
 */
export class FogOfWar {
  /**
   * Returns @param input as a @see PartialSystem with most fields hidden.
   *
   * This method does **NOT** mutate @param game.
   */
  hideSystem(game: Game, input: System): PartialSystem {
    return new PartialSystem({
      name: input.name,
      position: input.position.copyState(),
      lastSeenOnTurn: game.currentTurn,
      planets: [],
      orbit: {},
    });
  }

  /**
   * Returns @param input as a @see PartialSystem with all fields visible.
   *
   * This method does **NOT** mutate @param game.
   */
  showSystem(game: Game, input: System): PartialSystem {
    return new PartialSystem({
      ...input.copyState(),
      lastSeenOnTurn: game.currentTurn,
    });
  }

  /**
   * Returns @param game with the initial `fogOfWar` state.
   *
   * This method does **NOT** mutate @param game.
   */
  createInitialFogOfWar(
    game: Game,
  ): {
    [key: string]: FogOfWarState | undefined;
  } {
    const results: { [key: string]: FogOfWarState } = {};
    for (const p of game.players) {
      const systems: PartialSystemState[] = [];
      for (const s of game.systems) {
        if (s.owner === 'Empire') {
          continue;
        }
        let partial: PartialSystem;
        if (s.owner.name === p.name) {
          partial = this.showSystem(game, s);
        } else {
          partial = this.hideSystem(game, s);
        }
        systems.push(partial.copyState());
      }
      results[p.name] = { systems };
    }
    return results;
  }
}

export class Spawner {
  spawnInitialSystems(
    _prando: Prando,
    _systems: number,
    _settings: Settings,
    _players: PlayerReference[],
  ): SystemState[] {
    throw new Error('Unimplemented');
  }
}
