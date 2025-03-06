import { addSpriteToApp } from './add-sprite-to-app.js';

export async function game(app) {
  await addSpriteToApp(app, '/img/university.png');
  await addSpriteToApp(app, '/img/avatar.png');
}
