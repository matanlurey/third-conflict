import { GameState, PartialGameState } from './state';

/**
 * Sub-system that generates fog-of-war views of game entities.
 */
export class FogOfWar {
  viewGame(inputGame: GameState, asPlayer: string): PartialGameState {
    const fogOfWar = inputGame.fogOfWar[asPlayer];
    if (!fogOfWar) {
      throw new Error(`"${asPlayer}" not a member of ${inputGame.name}.`);
    }
  }
}
