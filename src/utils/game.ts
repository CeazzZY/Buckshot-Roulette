import { player } from "../types/player";
import { Tools } from "../types/tools";

export function gameInit(p1: player, p2: player) {
  //初始化玩家血量
  p1.HP = 5;
  p2.HP = 5;

  //确定先手
  getFirst(p1, p2);

  //开始第一回合
  startRound(p1, p2);
}

function getFirst(p1: player, p2: player) {
  const count = Math.floor(Math.random() * 2);
  if (count === 0) {
    //p1先手
  } else {
    //p2先手
  }
}

function startRound(p1: player, p2: player) {
  //双方获取道具
  const toolNum = Math.ceil(Math.random() * 4);
  getTools(p1, toolNum);
  getTools(p2, toolNum);

  //添加子弹
  addBullet();
}

export function getTools(player: player, number: number) {
  for (let i = 0; i < number; i++) {
    const tool = Math.floor(Math.random() * 5);
    player.tools.push(tool as Tools);
  }
}

export function addBullet() {}
