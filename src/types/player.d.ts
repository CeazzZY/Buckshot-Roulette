import { Tools } from "./tools";

export interface IPlayer {
  HP: number;
  tools: Tools[];
  locked: boolean;
}
