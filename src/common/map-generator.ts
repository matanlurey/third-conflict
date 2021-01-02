import Prando from 'prando';
import { Point, PointData } from './game-state';
import { PoissonDiskSampler } from './poisson-disk';

export abstract class MapGenerator {
  constructor(
    protected readonly prando = new Prando(),
    protected readonly names = [
      'Alfa',
      'Bravo',
      'Charlie',
      'Delta',
      'Echo',
      'Foxtrot',
      'Golf',
      'Hotel',
      'India',
      'Juliett',
      'Kilo',
      'Lima',
      'Mike',
      'November',
      'Oscar',
      'Papa',
      'Quebec',
      'Romeo',
      'Sierra',
      'Tango',
      'Uniform',
      'Victor',
      'Whiskey',
      'Xray',
      'Yankee',
      'Zulu',
    ],
  ) {}

  /**
   * Returns a set @param amount of system names.
   */
  protected fetchNames(amount: number): string[] {
    // TODO: Validate input (int, at least 1, at most names.length).
    return this.names.slice(0, amount);
  }

  /**
   * Given the inputs, determines an appropriate "weighted" @param distance.
   */
  protected computeDistanceWeight(
    maxDistance: number,
    distance: number,
    isHome: boolean,
  ): number {
    let weight = maxDistance - distance;
    if (isHome) {
      weight = Math.pow(2, weight);
    }
    return weight;
  }

  /**
   * Given @param positions, returns the farthest open system to use as a home.
   */
  protected pickFairestHomeSystem<
    T extends {
      position: PointData;
      home?: unknown;
    }
  >(positions: T[]): T {
    let result: T | undefined;
    let lowSum = Number.MAX_SAFE_INTEGER;
    let maxDistance = 0;
    for (const a of positions) {
      for (const b of positions) {
        const distance = new Point(a.position).distance(b.position);
        if (distance > maxDistance) {
          maxDistance = distance;
        }
      }
    }
    for (const a of positions) {
      if (a.home) {
        continue;
      }
      const weights: number[] = [];
      for (const b of positions) {
        const distance = new Point(a.position).distance(b.position);
        const weight = this.computeDistanceWeight(
          maxDistance,
          distance,
          !!b.home,
        );
        weights.push(weight);
      }
      const sumWeight = weights.reduce((p, c) => p + c, 0);
      if (sumWeight < lowSum) {
        lowSum = sumWeight;
        result = a;
      }
    }
    if (!result) {
      const open = positions.filter((s) => !s.home);
      if (open.length === 0) {
        throw new Error('Failed to find an open system.');
      }
      result = this.prando.nextArrayItem(open);
    }
    return result;
  }

  /**
   * Given a set of @param positions where the `{x, y}` coordinate pairs might
   * be scattered, finds the smallest `x` and `y` coordinate, and re-aligns all
   * positions to be as close as possible to `{0, 0}`.
   */
  protected reducePositionsToOrigin<
    T extends {
      position: PointData;
    }
  >(positions: T[]): T[] {
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    for (const system of positions) {
      const [x, y] = system.position;
      if (x < minX) {
        minX = x;
      }
      if (y < minY) {
        minY = y;
      }
    }
    return positions.map((system) => {
      let [x, y] = system.position;
      x -= minX;
      y -= minY;
      return {
        ...system,
        position: [x, y],
      };
    });
  }

  abstract generateMap(
    systems: number,
    players: number,
  ): { position: PointData; name: string }[];
}

export class PoissonMapGenerator extends MapGenerator {
  private readonly sampler: PoissonDiskSampler;

  constructor(
    sampler: PoissonDiskSampler | [number, number],
    prando?: Prando,
    names?: string[],
  ) {
    super(prando, names);
    this.sampler = Array.isArray(sampler)
      ? new PoissonDiskSampler(sampler, 4, undefined, prando)
      : sampler;
  }

  generateMap(
    systems: number,
    players: number,
  ): { position: PointData; name: string; home: boolean }[] {
    const names = this.fetchNames(systems);
    names.sort(() => this.prando.nextInt(-1, 1));
    const points = this.sampler.points(systems);
    const result: { position: PointData; name: string; home: boolean }[] = [];
    for (let i = 0; i < points.length; i++) {
      result.push({
        name: names[i],
        position: [
          Math.max(Math.ceil(points[i][0] - 1), 0),
          Math.max(Math.ceil(points[i][1] - 1), 0),
        ],
        home: false,
      });
    }
    while (players--) {
      this.pickFairestHomeSystem(result).home = true;
    }
    return this.reducePositionsToOrigin(result);
  }
}
