import { Sprite } from 'pixi.js';

export function createButton(alias) {
  const button = Sprite.from(alias);

  button.eventMode = 'static';
  button.cursor = 'pointer';

  return button;
}
