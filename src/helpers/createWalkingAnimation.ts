import Phaser from 'phaser';

export function createWalkingAnimation(scene: Phaser.Scene, characterKey: string, animationKey: string, startFrameRow: number) {
  const startFrame = (startFrameRow - 1) * 3; // 3列あるため、行によって開始フレームを計算
  scene.anims.create({
    key: animationKey,
    frames: [
      { key: characterKey, frame: startFrame + 1 },
      { key: characterKey, frame: startFrame },
      { key: characterKey, frame: startFrame + 1 },
      { key: characterKey, frame: startFrame + 2 }
    ],
    frameRate: 5,
    repeat: -1
  });
}