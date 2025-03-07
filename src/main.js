import { Application } from 'pixi.js';
import { setup } from './setup.js';
import { preload } from './preload.js';
import { renderBackground } from './render-background.js';
import { renderNavigation } from './render-navigation.js';

(async () => {
  const app = new Application();
  await setup(app);
  await preload(app);
  await renderBackground(app);
  await renderNavigation(app);
})();
