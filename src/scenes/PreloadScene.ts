import Phaser from 'phaser';
import { createWalkingAnimation } from '../helpers/createWalkingAnimation';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene', active: false });
  }

  preload() {
    // 歩行キャラのスプライトシートをロード
    this.load.spritesheet('walkingCharacter', '/src/assets/sprites/master.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 11 // スプライトシートの合計フレーム数 - 1
    });
  }

  create() {
    // 歩行アニメーションを作成
    createWalkingAnimation(this, 'walkingCharacter', 'walkDown', 1);
    createWalkingAnimation(this, 'walkingCharacter', 'walkLeft', 2);
    createWalkingAnimation(this, 'walkingCharacter', 'walkRight', 3);
    createWalkingAnimation(this, 'walkingCharacter', 'walkTop', 4);

    // アセットのロードが完了したら、ゲームのメインシーンに移行
    this.scene.start('GameScene');
  }
}