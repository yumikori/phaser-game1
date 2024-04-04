import Phaser from 'phaser';

export function calculateTileSizeAndOffset(scene: Phaser.Scene) {
    const screenWidth = scene.cameras.main.width;
    const screenHeight = scene.cameras.main.height;
    const gridColumns = 3; // グリッドの列数
    const gridRows = 4;    // グリッドの行数
    const tileSize = Math.min(screenWidth / gridColumns, screenHeight / gridRows);
    const gridWidth = tileSize * gridColumns;
    const gridHeight = tileSize * gridRows;
    const offsetX = (screenWidth - gridWidth) / 2;
    const offsetY = (screenHeight - gridHeight) / 2;
    
    return { tileSize, offsetX, offsetY, gridRows, gridColumns};
}