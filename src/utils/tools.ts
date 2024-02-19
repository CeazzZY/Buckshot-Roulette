import { IGameData } from "../types/game";
import { IPlayer } from "../types/player";
import { realBullet } from "../types/round";
import {
  Beer,
  Cigarette,
  Handcuffs,
  Knife,
  Magnifier,
  Tools,
} from "../types/tools";
import { afterShot } from "./round";

export function getTools(player: IPlayer, number: number) {
  for (let i = 0; i < number; i++) {
    const tool = Math.floor(Math.random() * 5);
    player.tools.push(tool as Tools);
  }
}

export function useTools(
  tools: Tools,
  user: IPlayer,
  target: IPlayer,
  gameData: IGameData,
  index: number
) {
  if (user.id !== gameData.turn) return;

  switch (tools) {
    case Beer:
      useBeer(target, user, gameData);
      break;
    case Cigarette:
      useCigarette(user);
      break;
    case Magnifier:
      if (gameData.magnifier) return;
      useMagnifier(gameData);
      break;
    case Knife:
      if (gameData.useKnife === true) return;
      useKnife(gameData);
      break;
    case Handcuffs:
      if (target.locked === true) return;
      useHandcuffs(target);
      break;
    default:
      break;
  }
  //删除元素
  user.tools.splice(index, 1);
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
  gameData.magnifier = true;
}

export function useKnife(gameData: IGameData) {
  gameData.useKnife = true;
}

export function useHandcuffs(player: IPlayer) {
  player.locked = true;
}

export function getToolsName(tools: Tools): string {
  switch (tools) {
    case Beer:
      return "Beer";
    case Cigarette:
      return "Cigarette";
    case Magnifier:
      return "Magnifier";
    case Knife:
      return "Knife";
    case Handcuffs:
      return "Handcuffs";
    default:
      return "";
  }
}
