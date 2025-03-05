import { addSprite } from './add-sprite.js';

export async function renderBackground(app) {
  await addSprite(app, 'map');
  await addSprite(app, 'path');
  await addSprite(app, 'pathPoints');
}
