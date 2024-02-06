export default class GameState extends Phaser.Scene {
  constructor() {
    super({ key: 'GameState' });
  }

  create(){
     // 画面幅と高さ
    const screenWidth: number = Number(this.game.config.width);
    const screenHeight: number = Number(this.game.config.height);

    // マス目のサイズ（正方形にする）
    const tileSize: number = Math.min(screenWidth * 0.8 / 3, screenHeight * 0.8 / 4);

    // マス目を中央に配置するためのオフセットを計算
    const xOffset: number = (screenWidth - tileSize * 3) / 2;
    const yOffset: number = (screenHeight - tileSize * 4) / 2;

     // マス目を描画するためのグラフィックスオブジェクトを作成
    const graphics: Phaser.GameObjects.Graphics = this.add.graphics();

    // マス目の行と列を描画
    for (let row: number = 0; row < 4; row++) {
      for (let col: number = 0; col < 3; col++) {
        const x: number = xOffset + col * tileSize;
        const y: number = yOffset + row * tileSize;
        graphics.lineStyle(2, 0xffffff);
        graphics.strokeRect(x, y, tileSize, tileSize);
      }
    }
  }
}