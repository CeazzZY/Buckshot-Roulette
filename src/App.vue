<script lang="ts" setup>
import { reactive } from "vue";

import { gameInit } from "./utils/game";
import { player } from "./types/player";

const p1 = reactive<player>({
  HP: 0,
  tools: [],
  locked: false,
});

const p2 = reactive<player>({
  HP: 0,
  tools: [],
  locked: false,
});
</script>

<template>
  <div className="main">
    <div className="left"></div>
    <div className="right"></div>

    <button className="centerButton" @click="gameInit(p1, p2)">开始游戏</button>
    <button className="chooseLeft">p1</button>
    <button className="chooseRight">p2</button>
    <div className="p1Tools">
      <div></div>
      <div></div>
    </div>
    <div className="p2Tools"></div>
    <div className="p1HP">{{ p1.HP }}</div>
    <div className="p2HP">{{ p2.HP }}</div>
    <div className="remind">p1选择</div>
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
</style>
