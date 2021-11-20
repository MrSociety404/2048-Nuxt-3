<template>
  <section class="game">
    <div class="game__row" v-for="(row, index) in grid" :key="index">
      <div
        class="game__column"
        v-for="(column, index) in row"
        :key="index"
        :style="`background-color: ${colorNumber[column]}; font-size:${sizeNumber[column]};`"
      >
        {{ column === 0 ? "" : column }}
      </div>
    </div>
    <div class="game__over" v-if="gameOver">
      <div>
        <h2 class="game__over-title">Game Over 🥺</h2>
        <p class="game__over-desc">Press the restart button</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { colorNumber, sizeNumber } from "@/composables/colorsTile";

defineProps({
  grid: Array,
  gameOver: Boolean,
});
</script>

<style lang="scss">
.game {
  width: 300px;
  height: 300px;
  padding: 1em;
  box-shadow: var(--morph);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  position: relative;
  &__row {
    display: flex;
    gap: 5px;
    justify-content: space-around;
    width: 100%;
  }
  &__column {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: var(--background-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6em;
    font-weight: 400;
    font-family: var(--ff-secondary);
  }
  &__over {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    backdrop-filter: blur(8px);
    text-align: center;
    &-title {
      font-size: 2em;
      color: var(--primary);
      font-weight: 500;
      font-family: var(--ff-primary);
      margin-bottom: .5em;
    }
  }
}
</style>