import Phaser from 'phaser';

export function placeCharacterAtStart(
  scene: Phaser.Scene,
  grid: Phaser.GameObjects.Rectangle[][],
  tileOrder: (number | string)[],
  character: Phaser.GameObjects.Sprite | undefined
) {
  const startIndex = tileOrder.findIndex(value => value === 1);
  if (startIndex === -1) return;
  const startX = startIndex % 3;
  const startY = Math.floor(startIndex / 3);
  character = scene.add.sprite(
    grid[startY][startX].x,
    grid[startY][startX].y,
    'walkingCharacter'
  );
  character.play('walkDown');
}