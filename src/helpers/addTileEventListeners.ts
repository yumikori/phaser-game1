import Phaser from 'phaser';

export function addTileEventListeners(
  grid: Phaser.GameObjects.Rectangle[][],
  moveToTile: (x: number, y: number) => void
) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      grid[y][x].on('pointerdown', () => {
        moveToTile(x, y);
      });
    }
  }
}