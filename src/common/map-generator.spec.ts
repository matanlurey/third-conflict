import { PointData } from './game-state';
import { MapGenerator } from './map-generator';

class TestMapGenerator extends MapGenerator {
  reducePositionsToOrigin<
    T extends {
      position: PointData;
    }
  >(positions: T[]): T[] {
    return super.reducePositionsToOrigin(positions);
  }
}

it('should reduce scatted position numbers', () => {
  const generator = new TestMapGenerator();

  expect(
    generator.reducePositionsToOrigin([
      { position: [1, 1] },
      { position: [1, 2] },
      { position: [3, 4] },
    ]),
  ).toEqual([{ position: [0, 0] }, { position: [0, 1] }, { position: [2, 3] }]);
});
