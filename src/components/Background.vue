<template>
  <div :class="gameData.turn === 1 && 'isActive' + ' left'"></div>
  <div :class="gameData.turn === 0 && 'isActive' + ' right'"></div>
</template>

<script setup lang="ts">
import { IGameData } from "../types/game";
import { defineProps } from "vue";

const { gameData } = defineProps<{
  gameData: IGameData;
}>();
</script>

<style scoped>
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
</style>
