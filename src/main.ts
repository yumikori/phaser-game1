import 'phaser';
import GameState from './game/GameState';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 720,  // スマートフォンの縦向き解像度に合わせて設定
  height: 1280, // スマートフォンの縦向き解像度に合わせて設定
  scene: [GameState],
};

// Phaserゲームのインスタンスを作成
const game = new Phaser.Game(config);