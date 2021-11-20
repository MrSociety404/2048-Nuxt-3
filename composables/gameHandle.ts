/**
 * Check if the game is over
 * @param grid grid to check
 * @returns True if the game is over
 */
export const isGameOver = (grid: number[][]): Boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
      if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
      if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
        return false;
      }
    }
  }
  return true;
};