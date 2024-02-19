<template>
  <div class="p1Tools">
    <div
      v-for="(item, index) in p1.tools"
      class="tools"
      @click="useTools(item, p1, p2, gameData, index)"
    >
      {{ getToolsName(item) }}
    </div>
  </div>
  <div class="p2Tools">
    <div
      v-for="(item, index) in p2.tools"
      class="tools"
      @click="useTools(item, p2, p1, gameData, index)"
    >
      {{ getToolsName(item) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { IPlayer } from "../../types/player";
import { IGameData } from "../../types/game";
import { useTools, getToolsName } from "../../utils/tools";

const { gameData, p1, p2 } = defineProps<{
  gameData: IGameData;
  p1: IPlayer;
  p2: IPlayer;
}>();
</script>

<style scoped>
.p1Tools {
  position: absolute;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: column;
  align-items: end;
  top: 15%;
  left: 0;
  width: 14vw;
  height: 60vh;
  border: 1px solid black;
}

.p2Tools {
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  top: 15%;
  right: 0;
  width: 14vw;
  height: 60vh;
  border: 1px solid black;
}

.tools {
  height: 15vh;
  width: 7vw;
  background-color: red;
}
</style>
