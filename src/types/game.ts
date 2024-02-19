import { Bullet } from "./round";

export interface IGameData {
  gameState: "ready" | "working";
  clip: Bullet[];
  realNum: number;
  emptyNum: number;
  turn: -1 | 0 | 1;
  winner: string | null;
}