import Phaser from 'phaser';
import { calculateTileSizeAndOffset } from '../helpers/calculateTileSizeAndOffset';
import { createGrid } from '../helpers/createGrid';


const tileOrder = [
    1, 2, 3,
    '×', 5, 4,
    7, 6, '×',
    8, 9, 10
];
export default class GameScene extends Phaser.Scene {
    private grid: Phaser.GameObjects.Rectangle[][];
    private character?: Phaser.GameObjects.Sprite; // オプショナルプロパティとして宣言

    constructor() {
        super({ key: 'GameScene', active: false });
        this.grid = [];
        this.character = undefined;
    }

    create() {
        // 画面のサイズに基づいてタイルサイズを計算
        const { tileSize, offsetX, offsetY,gridRows,gridColumns } = calculateTileSizeAndOffset(this);

        // グリッドの生成
        this.grid = createGrid(this, tileSize, offsetX, offsetY, gridRows, gridColumns, tileOrder);
        
        // イベントリスナーの追加は別の関数で行う
        this.addTileEventListeners();

        this.placeCharacterAtStart();
    }

    moveToTile(x: number, y: number) {
        console.log(`Tile at position (${x}, ${y}) was clicked.`);
    }
    
    placeCharacterAtStart() {
        // タイルの順序からスタート地点（最小の数字があるタイル）を見つける
        const startIndex = tileOrder.findIndex(value => value === 1); // ここで 1 はスタートの数字
        if (startIndex === -1) return; // スタート地点が見つからない場合は何もしない

        const startX = startIndex % 3; // グリッドの列位置
        const startY = Math.floor(startIndex / 3); // グリッドの行位置

        // キャラクタースプライトを作成し、スタート地点に配置
        this.character = this.add.sprite(
            this.grid[startY][startX].x,
            this.grid[startY][startX].y,
            'walkingCharacter'
        );

        // キャラクターにアニメーションを適用
        this.character.play('walkDown');
    }
    addTileEventListeners() {
    for (let y = 0; y < this.grid.length; y++) {
        for (let x = 0; x < this.grid[y].length; x++) {
            this.grid[y][x].on('pointerdown', () => {
                this.moveToTile(x, y);
            });
        }
    }
}
}
