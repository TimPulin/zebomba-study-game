import { Sprite } from 'pixi.js';

export async function addSprite(app, alias) {
  const sprite = Sprite.from(alias);
  sprite.anchor.set(0.5, 0.5);
  sprite.x = app.screen.width / 2;
  sprite.y = app.screen.height / 2;
  app.stage.addChild(sprite);

  return sprite;
}
