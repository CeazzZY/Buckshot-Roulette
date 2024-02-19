<script lang="ts" setup>
import { reactive } from "vue";

import { gameInit } from "./utils/game";
import { IPlayer } from "./types/player";
import { IGameData } from "./types/game";
import { shot } from "./utils/round";

const p1 = reactive<IPlayer>({
  HP: 0,
  tools: [],
  locked: false,
});

const p2 = reactive<IPlayer>({
  HP: 0,
  tools: [],
  locked: false,
});

const gameData = reactive<IGameData>({
  gameState: "ready",
  clip: [],
  realNum: 0,
  emptyNum: 0,
  turn: -1,
  winner: null,
});
</script>

<template>
  <div class="main">
    <div :class="gameData.turn === 1 && 'isActive' + ' left'"></div>
    <div :class="gameData.turn === 0 && 'isActive' + ' right'"></div>

    <template v-if="gameData.gameState === 'ready'">
      <button class="centerButton" @click="gameInit(p1, p2, gameData)">
        {{ gameData.winner ? "再来一次" : "开始游戏" }}
      </button>
      <div v-if="gameData.winner" class="winner">
        {{ gameData.winner + "获胜" }}
      </div>
    </template>
    <template v-if="gameData.gameState === 'working'">
      <button class="chooseLeft" @click="shot(gameData, p1, p2, p1)">
        {{ `打${gameData.turn === 0 ? "自己" : "对面"}` }}
      </button>
      <button class="chooseRight" @click="shot(gameData, p1, p2, p2)">
        {{ `打${gameData.turn === 0 ? "对面" : "自己"}` }}
      </button>
      <div class="p1Tools">
        {{ p1.tools.length }}
      </div>
      <div class="p2Tools">
        {{ p2.tools.length }}
      </div>
      <div class="p1HP">{{ p1.HP }}</div>
      <div class="p2HP">{{ p2.HP }}</div>
      <div class="remind">
        {{ (gameData.turn === 0 ? "p1" : "p2") + "的回合" }}
      </div>
      <div class="bullet">
        {{ gameData.realNum + "实 / " + gameData.emptyNum + "空" }}
      </div>
    </template>
  </div>
</template>

<style>
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.main {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.centerButton {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.chooseLeft {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(0, -50%);
}

.chooseRight {
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(0, -50%);
}

.p1HP {
  position: absolute;
  top: 10%;
  left: 30%;
}

.p2HP {
  position: absolute;
  top: 10%;
  right: 30%;
}

.p1Tools {
  position: absolute;
  top: 10%;
  left: 0;
  width: 18vw;
  height: 80vh;
  border: 1px solid black;
}

.p2Tools {
  position: absolute;
  top: 10%;
  right: 0;
  width: 18vw;
  height: 80vh;
  border: 1px solid black;
}

.remind {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
}

.left {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
}

.isActive {
  background-color: grey;
}

.bullet {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 0);
}

.winner {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 60%;
}
</style>
