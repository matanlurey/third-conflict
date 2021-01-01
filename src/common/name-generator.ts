import Prando from 'prando';

export class NameGenerator {
  constructor(
    private readonly rng = new Prando(),
    private readonly adjectives: string[] = [
      'angry',
      'attractive',
      'bald',
      'big',
      'brave',
      'clumsy',
      'fierce',
      'happy',
      'itchy',
      'handsome',
      'petite',
      'repulsive',
      'silly',
      'stocky',
      'tall',
      'tiny',
      'wonderful',
      'zealous',
    ],
    private readonly nouns: string[] = [
      'antelope',
      'cat',
      'dog',
      'eagle',
      'gorilla',
      'lion',
      'rabbit',
      'snake',
      'tiger',
      'vulture',
      'zebra',
    ],
  ) {}

  next(): string {
    return `${this.rng.nextArrayItem(this.adjectives)}-${this.rng.nextArrayItem(
      this.nouns,
    )}-${this.rng.nextInt(0, 99).toString().padStart(2, '0')}`;
  }
}
