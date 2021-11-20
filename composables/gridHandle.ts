/**
 * Create an empty grid
 * @returns new empty grid
 */
export const blankGrid = (): number[][] => {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
};

/**
 * Split all the number to the right
 * @returns new row with number splited
 */
export const slideGrid = (row: number[]): number[] => {
  let arr = row.filter((row) => row);
  let zerros = new Array(4 - arr.length).fill(0);
  arr = zerros.concat(arr);
  return arr;
};

/**
 * Copy a given grid
 * @param grid grid to copy
 * @returns copy of the grid
 */
export const copyGrid = (grid: number[][]): number[][] => {
  let arr = blankGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      arr[i][j] = grid[i][j];
    }
  }
  return arr;
};

/**
 * Flip a given grid
 * @param grid grid to flip
 * @returns flipped grid
 */
export const flipGrid = (grid: number[][]): number[][] => {
  for (let i = 0; i < 4; i++) {
    grid[i].reverse();
  }
  return grid;
};

/**
 * Rotate a grid
 * @param grid grid to rotate
 * @returns rotated grid
 */
export const rotateGrid = (grid: number[][]): number[][] => {
  let arr = blankGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      arr[i][j] = grid[j][i];
    }
  }
  return arr;
};

/**
 * Compare 2 grid
 * Return true if the grids are different
 * @param oldGrid old grid to compare
 * @param newGrid new grid to compare with
 * @returns Boolean if grid are different
 */
export const compareGrid = (
  oldGrid: number[][],
  newGrid: number[][]
): Boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (newGrid[i][j] !== oldGrid[i][j]) return true;
    }
  }
};
