export function deepClone<T>(input: T): T {
  return JSON.parse(JSON.stringify(input));
}
