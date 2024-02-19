import { IGameData } from "../types/game";
import { IPlayer } from "../types/player";
import { realBullet } from "../types/round";
import { Tools } from "../types/tools";
import { afterShot } from "./round";

export function getTools(player: IPlayer, number: number) {
  for (let i = 0; i < number; i++) {
    const tool = Math.floor(Math.random() * 5);
    player.tools.push(tool as Tools);
  }
}

export function useBeer(p1: IPlayer, p2: IPlayer, gameData: IGameData) {
  const bullet = gameData.clip.shift();
  if (bullet === realBullet) {
    gameData.realNum--;
  } else {
    gameData.emptyNum--;
  }
  afterShot(p1, p2, gameData);
}

export function useCigarette(player: IPlayer) {
  player.HP++;
}

export function useMagnifier(gameData: IGameData) {
  return gameData.clip[0];
}

export function Knife(gameData: IGameData) {
  gameData.useKnife = true;
}

export function Handcuffs(player: IPlayer) {
  player.locked = true;
}
