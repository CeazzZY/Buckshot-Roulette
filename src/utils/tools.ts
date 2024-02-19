import { IPlayer } from "../types/player";
import { Tools } from "../types/tools";

export function getTools(player: IPlayer, number: number) {
  for (let i = 0; i < number; i++) {
    const tool = Math.floor(Math.random() * 5);
    player.tools.push(tool as Tools);
  }
}
