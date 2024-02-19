import { IGameData } from "../types/game";
import { IPlayer } from "../types/player";
import { startRound } from "./round";
import { getTools } from "./tools";

export function gameInit(p1: IPlayer, p2: IPlayer, gameData: IGameData) {
  gameData.gameState = "working";

  //初始化
  p1.HP = 5;
  p2.HP = 5;
  p1.tools = [];
  p2.tools = [];

  //确定先手
  getFirst(p1, p2, gameData);

  //开始第一回合
  startRound(p1, p2, gameData);
}

function getFirst(p1: IPlayer, p2: IPlayer, gameData: IGameData) {
  const count = Math.floor(Math.random() * 2);
  if (count === 0) {
    //p1先手
    gameData.turn = 0;
    getTools(p2, 1);
  } else {
    //p2先手
    gameData.turn = 1;
    getTools(p1, 1);
  }
}



export function gameOver(winner: string, gameData: IGameData) {
  gameData.gameState = "ready";
  gameData.winner = winner;
}
