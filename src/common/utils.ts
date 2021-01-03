export function deepClone<T>(input: T): T {
  return JSON.parse(JSON.stringify(input));
}

export function repeat(length: number): number[] {
  return new Array(length).fill(null).map((_, i) => i);
}

export function matrix<T>(height: number, width: number): T[][] {
  return new Array(height).fill(null).map(() => new Array(width).fill(null));
}
