import Prando from 'prando';
import {
  FleetData,
  FogOfWarGameData,
  GameStateData,
  HudIndicatorTag,
  OwnerData,
  PlayerStateData,
  SystemData,
} from './game-state';
import { PoissonMapGenerator } from './map-generator';
import { PoissonDiskSampler } from './poisson-disk';
import { deepClone } from './utils';

export function viewGameStateAs(
  state: GameStateData,
  perspective: string,
): FogOfWarGameData | undefined {
  for (const player of state.players) {
    if (player.userId === perspective) {
      return player.fogOfWar;
    }
  }
}

export class FogOfWar {
  createInitialFogOfWar(
    state: GameStateData,
    serverAgent: boolean,
    player: string,
  ): FogOfWarGameData {
    return {
      kind: 'Game',
      name: state.name,
      players: state.players.length,
      endedTurn: serverAgent,
      serverAgent,
      systems: state.systems.map((system) => {
        return {
          name: system.name,
          position: system.position,
          status: this.determineStatus(system, player),
        };
      }),
    };
  }

  private determineStatus(system: SystemData, player: string): HudIndicatorTag {
    if (system.owner === 'Empire') {
      return;
    }
    if (system.owner.player === player) {
      return 'Self';
    }
  }
}

export class RandomSpawner {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private spawnEmpireFleet(_prando: Prando): FleetData {
    return {
      transports: 0,
      troops: 0,
      warships: 0,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private spawnPlayerFleet(_prando: Prando): FleetData {
    return {
      transports: 0,
      troops: 0,
      warships: 0,
    };
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
      let orbit: FleetData;
      if (stub.home) {
        owner = { player: players.splice(0, 1)[0].userId };
        orbit = this.spawnPlayerFleet(prando);
      } else {
        owner = 'Empire';
        orbit = this.spawnEmpireFleet(prando);
      }
      return {
        name: stub.name,
        home: owner,
        owner,
        position: stub.position,
        orbit,
      };
    });
  }
}
