export interface API {
  createGame(code: string): Promise<void>;
}
