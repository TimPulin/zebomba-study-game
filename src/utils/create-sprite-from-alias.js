import { Sprite } from 'pixi.js';

export function createSpriteFromAlias(alias) {
  return Sprite.from(alias);
}
