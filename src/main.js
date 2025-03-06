import { Application } from 'pixi.js';
import { setup } from './setup.js';
import { preload } from './preload.js';
import { addSpriteToApp } from './add-sprite-to-app.js';
import { renderBackground } from './render-background.js';
import { renderNavigation } from './control/render-navigation.js';

(async () => {
  const app = new Application();
  await setup(app);
  await preload(app);
  await renderBackground(app);
  const avatar = await addSpriteToApp(app, 'avatar');
  avatar.x = 445;
  avatar.y = 470;
  await renderNavigation(app);
  // await game(app);
})();
