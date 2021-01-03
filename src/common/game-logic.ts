import Prando from 'prando';
import { OwnerData, PlayerStateData, SystemData } from './game-state';
import { PoissonMapGenerator } from './map-generator';
import { PoissonDiskSampler } from './poisson-disk';
import { deepClone } from './utils';

export class RandomSpawner {
  private spawnEmpireSystem(): SystemData {
    throw new Error('Unimplemented');
  }

  private spawnPlayerSystem(): SystemData {
    throw new Error('Unimplemented');
  }

  spawnInitialSystems(
    prando: Prando,
    systems: number,
    players: PlayerStateData[],
  ): SystemData[] {
    const ratio = systems / 26;
    const sampler = new PoissonDiskSampler(
      [Math.ceil(50 * ratio), Math.ceil(30 * ratio)],
      4,
      undefined,
      prando,
    );
    const generator = new PoissonMapGenerator(sampler, prando);
    players = deepClone(players).sort(() => prando.nextInt(-1, 1));
    return generator.generateMap(systems, players.length).map((stub) => {
      let owner: OwnerData;
      if (stub.home) {
        owner = { player: players.splice(0, 1)[0].userId };
      } else {
        owner = 'Empire';
      }
      return {
        name: stub.name,
        home: owner,
        owner,
        position: stub.position,
      };
    });
  }
}
