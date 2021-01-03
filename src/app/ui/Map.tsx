import { PointData } from '../../common/game-state';

function simpleVisualize(
  systems: { position: PointData; name: string }[],
): string[][] {
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
  if (width === 0 || height === 0) {
    return [];
  }
  const grid: string[][] = new Array(height + 1);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(width + 1).fill('');
  }
  systems.forEach((system) => {
    const [x, y] = system.position;
    const s = system.name.substring(0, 1);
    grid[y][x] = s;
  });
  return grid;
}

export interface MapProps {
  systems: { position: PointData; name: string }[];
}

export function MapPreview(props: MapProps): JSX.Element {
  return (
    <pre style={{ border: '1px dashed #666', padding: '5px' }}>
      {simpleVisualize(props.systems)
        .map((row) => row.map((col) => (col === '' ? '•' : col)).join(' '))
        .join('\n') + '\n'}
    </pre>
  );
}
