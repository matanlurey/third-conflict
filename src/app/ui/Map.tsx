import { HudIndicatorTag, PointData } from '../../common/game-state';
import { matrix, repeat } from '../../common/utils';
import './Map.scss';

export interface MapProps {
  systems: {
    /**
     * Position of the system (x, y).
     */
    position: PointData;

    /**
     * Name of the system.
     */
    name: string;

    /**
     * Last known reconnaissance information showing ownership.
     *
     * May be left `undefined` if unknown.
     */
    status?: HudIndicatorTag;
  }[];
}

function determineBounds(
  systems: { position: PointData }[],
): { width: number; height: number } {
  let width = 0;
  let height = 0;
  systems.forEach((system) => {
    const [x, y] = system.position;
    if (x > width) {
      width = x;
    }
    if (y > height) {
      height = y;
    }
  });
  return { width, height };
}

export function MapPreview(props: MapProps): JSX.Element {
  let { width, height } = determineBounds(props.systems);
  width += 1;
  height += 1;
  const elements: JSX.Element[][] = matrix(height, width);
  const decorators: string[][] = matrix(height, width);
  for (const system of props.systems) {
    const [x, y] = system.position;
    decorators[y][x] = `${(system.status || '').toLowerCase()}`;
    elements[y][x] = <>{system.name.substring(0, 1).toUpperCase()}</>;
  }
  return (
    <table className="map-preview">
      <tbody>
        {repeat(height).map((y) => {
          return (
            <tr key={y}>
              {repeat(width).map((x) => {
                return (
                  <td key={x} className={decorators[y][x]}>
                    {elements[y][x]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
