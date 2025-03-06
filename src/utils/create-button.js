import { Sprite } from 'pixi.js';

export function createButton({ alias, coordinates: [x, y], onClick }) {
  const button = Sprite.from(alias);
  button.x = x;
  button.y = y;

  button.eventMode = 'static';
  button.cursor = 'pointer';
  button.on('pointerdown', onClick);

  return button;
}
