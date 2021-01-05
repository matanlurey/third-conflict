import Prando from 'prando';
import { v4 } from 'uuid';
import {
  FleetData,
  FogOfWarGameData,
  FogOfWarSystemData,
  GameSettingsData,
  GameStateData,
  HudIndicatorTag,
  OwnerData,
  PlanetData,
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
    playerId: string,
  ): FogOfWarGameData {
    let player!: PlayerStateData;
    for (const p of state.players) {
      if (p.userId === playerId) {
        player = p;
        break;
      }
    }
    return {
      kind: 'Game',
      currentTurn: state.currentTurn,
      name: state.name,
      players: state.players.length,
      endedTurn: serverAgent,
      fleets: [],
      systems: state.systems.map((system) => {
        return this.revealSystem(system, player);
      }),
    };
  }

  // TODO: Add an option to reveal a non-friendly system.
  revealSystem(input: SystemData, player: PlayerStateData): FogOfWarSystemData {
    const status = this.determineStatus(input, player.userId);
    let fleet: Partial<FleetData> = {};
    let factories: number | undefined;
    let planets: PlanetData[] | undefined;
    if (status === 'Self') {
      fleet = input.orbit;
      factories = input.factories;
      planets = input.planets;
    }
    return {
      name: input.name,
      position: input.position,
      status,
      orbit: fleet,
      factories,
      planets,
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
  private randomEmpireFactories(
    prando: Prando,
    initialFactories: number,
  ): number {
    return prando.nextInt(
      Math.floor(initialFactories / 4),
      Math.floor(initialFactories / 2),
    );
  }

  private spawnEmpireFleet(prando: Prando): FleetData {
    // TODO: Make this scale with difficulty, once that's a thing.
    const ratio = 1;
    const warships = prando.nextInt(10, 30) * ratio;
    return {
      // TODO: Determine whether these are applicable for Empire.
      transports: 0,
      troops: 0,
      warships,
    };
  }

  private spawnPlayerFleet(prando: Prando): FleetData {
    const warships = prando.nextInt(180, 240);
    const transports = prando.nextInt(20, 30);
    const troops = transports * 50;
    return { transports, troops, warships };
  }

  spawnPlanet(prando: Prando, owner: OwnerData): PlanetData {
    // TODO: Make initial generation more fair by giving players a chance to
    // have a slight advantage in some area (i.e. better planets, more troops,
    // more ships) without possibly having all of those or none of those.
    return {
      guid: v4(),
      morale: 1,
      owner,
      troops: prando.nextInt(20, 80),
      // TODO: Weight this, so it's more common to get ~4.
      recruit: prando.nextInt(1, 10),
    };
  }

  spawnInitialSystems(
    prando: Prando,
    systems: number,
    settings: GameSettingsData,
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
      let factories: number;
      let planets: PlanetData[];
      if (stub.home) {
        owner = { player: players.splice(0, 1)[0].userId };
        orbit = this.spawnPlayerFleet(prando);
        factories = settings.initialFactories;
        planets = new Array(10)
          .fill(null)
          .map(() => this.spawnPlanet(prando, owner));
      } else {
        owner = 'Empire';
        orbit = this.spawnEmpireFleet(prando);
        factories = this.randomEmpireFactories(
          prando,
          settings.initialFactories,
        );
        planets = new Array(prando.nextInt(2, 5))
          .fill(null)
          .map(() => this.spawnPlanet(prando, owner));
      }
      return {
        name: stub.name,
        home: owner,
        owner,
        position: stub.position,
        orbit,
        factories,
        planets,
      };
    });
  }
}

export class TurnProcessor {
  nextTurn(state: GameStateData): GameStateData {
    return {
      ...state,
      currentTurn: state.currentTurn + 1,
      players: state.players.map((player) => {
        return {
          ...player,
          fogOfWar: {
            ...player.fogOfWar,
            currentTurn: player.fogOfWar.currentTurn + 1,
            endedTurn: player.serverAgent,
          },
        };
      }),
    };
  }
}
