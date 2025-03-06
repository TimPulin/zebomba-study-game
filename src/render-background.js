import { addSpriteToApp } from './add-sprite-to-app.js';

export async function renderBackground(app) {
  await addSpriteToApp(app, 'map');
  await addSpriteToApp(app, 'path');
  await addSpriteToApp(app, 'pathPoints');
}
