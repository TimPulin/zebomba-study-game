import { Application } from 'pixi.js';
import { setup } from './setup.js';
import { preload } from './preload.js';
import { addSprite } from './add-sprite.js';
import { renderBackground } from './render-background.js';

(async () => {
  const app = new Application();
  await setup(app);
  await preload(app);
  await renderBackground(app);
  await addSprite(app, 'avatar');

  // await game(app);
})();
