import { IGameData } from "../types/game";
import { IPlayer } from "../types/player";
import { getTools } from "./tools";

export function startRound(p1: IPlayer, p2: IPlayer, gameData: IGameData) {
  //双方获取道具
  const toolNum = Math.ceil(Math.random() * 4);
  getTools(p1, toolNum);
  getTools(p2, toolNum);

  // 添加子弹
  addBullet(gameData);
}

export function addBullet(gameData: IGameData) {
    const total = Math.ceil(Math.random() * 8);
    for (let i = 0; i < total; i++) {
      const bullet = Math.floor(Math.random() * 2);
      if (bullet === 1) {
        gameData.realNum++;
      } else if (bullet === 0) {
        gameData.emptyNum++;
      }
      gameData.clip.push(bullet);
    }
  }
  