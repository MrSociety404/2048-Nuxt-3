<template>
  <Header :best="best" />
  <main>
    <Game :grid="grid" :gameOver="gameOver"/>
    <Info :score="score" :title="title" />
    <Nav @resetBtn="reset" />
  </main>
</template>

<script setup lang="ts">
import {
  blankGrid,
  slideGrid,
  copyGrid,
  flipGrid,
  rotateGrid,
  compareGrid,
} from "@/composables/gridHandle";
import { isGameOver } from "@/composables/gameHandle";
// Initial empty game
const grid = ref();
const score = ref(0);
const title = ref("Your actual score");
const best = ref(0);
const gameOver = ref(false)

/**
 * Add Random Number in the grid
 * 90% luck to have a 2
 * 10% luck to have a 4
 */
const addRandomNumber = (): void => {
  let freeArea = false;
  do {
    const r1 = Math.floor(Math.random() * 4);
    const r2 = Math.floor(Math.random() * 4);

    // If area is not free, restart
    if (grid.value[r1][r2] !== 0) {
      freeArea = true;
    } else {
      freeArea = false;
      grid.value[r1][r2] = Math.random() < 0.1 ? 4 : 2;
    }
  } while (freeArea);
};

/**
 * Operate on a row
 */
const operate = (grid: number[][]): number[][] => {
  for (let i = 0; i < 4; i++) {
    grid[i] = slideGrid(grid[i]);
    grid[i] = combineRow(grid[i]);
    grid[i] = slideGrid(grid[i]);
  }
  return grid;
};

/**
 * Combine a row
 * @param row row to combine
 * @returns combined row
 */
const combineRow = (row: number[]) => {
  for (let i = 3; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      row[i - 1] = 0;
      score.value += row[i];
    }
  }
  return row;
};

/**
 * Reset the game
 */
const reset = () => {
  grid.value = blankGrid();
  title.value = "Your actual score";
  score.value = 0;
  gameOver.value = false
  addRandomNumber();
  addRandomNumber();
};

onMounted((): void => {
  const storeBest = JSON.parse(localStorage.getItem("best2048"));
  if (storeBest) best.value = storeBest;

  grid.value = blankGrid();
  addRandomNumber();
  addRandomNumber();

  window.addEventListener("keydown", (e) => {
    e.preventDefault(); //Cancel move with arrow in the page
    let flipped = false;
    let rotated = false;
    let played = true;
    // get the arrow direction
    switch (e.key) {
      case "ArrowRight":
        break;
      case "ArrowLeft":
        grid.value = flipGrid(grid.value);
        flipped = true;
        break;
      case "ArrowDown":
        grid.value = rotateGrid(grid.value);
        rotated = true;
        break;
      case "ArrowUp":
        grid.value = rotateGrid(grid.value);
        grid.value = flipGrid(grid.value);
        rotated = true;
        flipped = true;
        break;
      default:
        played = false;
    }

    if (played) {
      let past = copyGrid(grid.value); // |
      grid.value = operate(grid.value); // Operate and compare the game
      let changed = compareGrid(past, grid.value); // |

      // Flip the grid
      if (flipped) {
        grid.value = flipGrid(grid.value);
      }

      // Rotate the grid
      if (rotated) {
        grid.value = rotateGrid(grid.value);
        grid.value = rotateGrid(grid.value);
        grid.value = rotateGrid(grid.value);
      }

      if (changed) addRandomNumber(); // Add number if the game change

      if (isGameOver(grid.value)) {
        title.value = "Game Over ! ";
        best.value = score.value;
        gameOver.value = true
        localStorage.setItem("best2048", JSON.stringify(best.value));
      }
    }
  });
});
</script>