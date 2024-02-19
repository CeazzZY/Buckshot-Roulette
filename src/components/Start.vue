<template >
  <button class="centerButton" @click="gameInit(p1, p2, gameData)">
    {{ gameData.winner ? "再来一次" : "开始游戏" }}
  </button>
  <div v-if="gameData.winner" class="winner">
    {{ gameData.winner + "获胜" }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IGameData } from "../types/game";
import { gameInit } from "../utils/game";
import { IPlayer } from "../types/player";
const { gameData, p1, p2 } = defineProps<{
  gameData: IGameData;
  p1: IPlayer;
  p2: IPlayer;
}>();
</script>

<style scoped>
.centerButton {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.winner {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 60%;
}
</style>
