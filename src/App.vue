<script lang="ts" setup>
import { reactive } from "vue";

import { IPlayer } from "./types/player";
import { IGameData } from "./types/game";
import { shot } from "./utils/round";

import Background from "./components/Background.vue";
import Start from "./components/Start.vue";
import Tools from "./components/game/Tools.vue";

const p1 = reactive<IPlayer>({
  id: 0,
  HP: 0,
  tools: [],
  locked: false,
});

const p2 = reactive<IPlayer>({
  id: 1,
  HP: 0,
  tools: [],
  locked: false,
});

const gameData = reactive<IGameData>({
  gameState: "ready",
  clip: [],
  realNum: 0,
  emptyNum: 0,
  useKnife: false,
  turn: -1,
  winner: null,
  magnifier: false,
});
</script>

<template>
  <div class="main">
    <Background :gameData="gameData" />
    <Start
      :gameData="gameData"
      :p1="p1"
      :p2="p2"
      v-if="gameData.gameState === 'ready'"
    />
    <template v-if="gameData.gameState === 'working'">
      <button class="chooseLeft" @click="shot(gameData, p1, p2, p1)">
        {{ `打${gameData.turn === 0 ? "自己" : "对面"}` }}
      </button>
      <button class="chooseRight" @click="shot(gameData, p1, p2, p2)">
        {{ `打${gameData.turn === 0 ? "对面" : "自己"}` }}
      </button>
      <Tools :gameData="gameData" :p1="p1" :p2="p2" />
      <div class="p1HP">{{ p1.HP }}</div>
      <div class="p2HP">{{ p2.HP }}</div>
      <div class="remind">
        {{ (gameData.turn === 0 ? "p1" : "p2") + "的回合" }}
      </div>
      <div class="bullet">
        {{ gameData.realNum + "实 / " + gameData.emptyNum + "空" }}
      </div>
      <div v-if="gameData.magnifier" class="magnifier">
        {{ "下一颗子弹是：" + (gameData.clip[0] === 1 ? "实弹" : "空弹") }}
      </div>
      <div v-if="gameData.useKnife" class="knife">
        已经使用刀，下次实弹造成伤害为2
      </div>
      <div v-if="p1.locked" class="p1Locked">已被拷住</div>
      <div v-if="p2.locked" class="p2Locked">已被拷住</div>
    </template>
  </div>
</template>

<style scoped>
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

.remind {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
}

.bullet {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 0);
}

.magnifier {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
}

.knife {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, 0);
}

.p1Locked {
  position: absolute;
  top: 80%;
  left: 10%;
}

.p2Locked {
  position: absolute;
  top: 80%;
  right: 10%;
}
</style>
