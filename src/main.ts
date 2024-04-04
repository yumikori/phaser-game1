import 'phaser';
import BootScene from './scenes/BootScene';
import PreloadScene from './scenes/PreloadScene';
import GameScene from './scenes/GameScene';

// 画面のサイズを取得
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: screenWidth, // 画面の幅に合わせて設定
  height: screenHeight, // 画面の高さに合わせて設定
  scene: [BootScene, PreloadScene, GameScene], // 必要なシーンを配列で指定
};

// Phaserゲームのインスタンスを作成
const game = new Phaser.Game(config);