import Phaser from 'phaser';

export function createGrid(scene: Phaser.Scene, tileSize: number, offsetX: number, offsetY: number, gridRows: number, gridColumns: number, tileOrder: (number | string)[]): Phaser.GameObjects.Rectangle[][] {
    let grid: Phaser.GameObjects.Rectangle[][] = [];

    for (let y = 0; y < gridRows; y++) {
        grid[y] = [];
        for (let x = 0; x < gridColumns; x++) {
            let tile = scene.add.rectangle(
                offsetX + x * tileSize + tileSize / 2,
                offsetY + y * tileSize + tileSize / 2,
                tileSize,
                tileSize,
                0x6666ff
            );
            tile.setInteractive();
            tile.setStrokeStyle(2, 0xffffff);
            grid[y][x] = tile;

            const tileIndex = y * gridColumns + x;
            const tileValue = tileOrder[tileIndex];
            let text = scene.add.text(
                offsetX + x * tileSize + tileSize / 2,
                offsetY + y * tileSize + tileSize / 2,
                tileValue.toString(),
                { font: '24px Arial', color: '#000' }
            );
            text.setOrigin(0.5, 0.5);
        }
    }

    return grid;
}

