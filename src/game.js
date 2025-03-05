import { addSprite } from './add-sprite.js';

export async function game(app) {
  await addSprite(app, '/img/university.png');
  await addSprite(app, '/img/avatar.png');
}
