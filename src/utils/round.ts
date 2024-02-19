import { IGameData } from "../types/game";
import { IPlayer } from "../types/player";
import { Bullet, emptyBullet, realBullet } from "../types/round";
import { gameOver } from "./game";
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
    if (bullet === realBullet) {
      gameData.realNum++;
    } else if (bullet === emptyBullet) {
      gameData.emptyNum++;
    }
    gameData.clip.push(bullet as Bullet);
  }
}

export function shot(
  gameData: IGameData,
  p1: IPlayer,
  p2: IPlayer,
  target: IPlayer
) {
  const bullet = gameData.clip.shift();
  const host = gameData.turn === 0 ? p1 : p2;

  if (bullet === realBullet) {
    target.HP = target.HP - 1;
    gameData.realNum--;
    changeTurn(gameData);
  } else {
    gameData.emptyNum--;
    if (host !== target) {
      changeTurn(gameData);
    }
  }
  afterShot(p1, p2, gameData);
}

function changeTurn(gameData: IGameData) {
  const now = gameData.turn;
  if (now === 0) {
    gameData.turn = 1;
  } else {
    gameData.turn = 0;
  }
}
export function afterShot(p1: IPlayer, p2: IPlayer, gameData: IGameData) {
  if (p1.HP < 0) {
    gameOver("p2", gameData);
  } else if (p2.HP < 0) {
    gameOver("p1", gameData);
  } else if (gameData.clip.length === 0) {
    startRound(p1, p2, gameData);
  }
}
