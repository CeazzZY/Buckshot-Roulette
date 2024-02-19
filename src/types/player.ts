import { Tools } from "./tools";

export interface IPlayer {
  id: number;
  HP: number;
  tools: Tools[];
  locked: boolean;
}
