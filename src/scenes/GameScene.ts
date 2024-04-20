import Phaser from 'phaser';
import { calculateTileSizeAndOffset } from '../helpers/calculateTileSizeAndOffset';
import { createGrid } from '../helpers/createGrid';
import { placeCharacterAtStart } from '../helpers/placeCharacterAtStart';
import { addTileEventListeners } from '../helpers/addTileEventListeners';
import { moveToTile } from '../helpers/moveToTile';


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
        super({ key: 'GameScene', active: true });
        this.grid = [];
        this.character = undefined;
    }

    create() {
        // 画面のサイズに基づいてタイルサイズを計算
        const { tileSize, offsetX, offsetY,gridRows,gridColumns } = calculateTileSizeAndOffset(this);

        // グリッドの生成
        this.grid = createGrid(this, tileSize, offsetX, offsetY, gridRows, gridColumns, tileOrder);
        
        // イベント登録
        addTileEventListeners(this.grid, moveToTile);

        //　スタート位置にキャラ設置
        placeCharacterAtStart(this, this.grid, tileOrder,this.character);
    }

}
