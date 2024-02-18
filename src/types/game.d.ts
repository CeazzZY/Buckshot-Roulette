export interface IGameData {
  gameState: "ready" | "working";
  clip: number[];
  realNum: number;
  emptyNum: number;
  turn: -1 | 0 | 1;
  winner: string | null;
}
