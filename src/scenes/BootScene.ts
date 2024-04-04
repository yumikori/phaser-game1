import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene', active: true });
  }

  preload() {
    // アセットのプリロードをここで行いますが、
    // このシーンでは最小限のものだけをロードするのが一般的です。
    // 例: ローディングバーの画像など
  }

  create() {
    // 設定が完了したら、PreloadSceneにシーンを切り替えます。
    this.scene.start('PreloadScene');
  }
}