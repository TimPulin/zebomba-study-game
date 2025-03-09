import { Container } from 'pixi.js';
import { addSpriteToEnd } from './utils/add-sprite-to-end.js';
import { createButton } from './utils/create-button.js';
import { characterControl } from './university/character-control.js';

export async function renderNavigation({ app, chatLayout, buttonCallRating }) {
  const navContainer = new Container();
  navContainer.x = 10;
  navContainer.y = 549;

  addSpriteToEnd(navContainer, chatLayout, 0);

  const buttonUniversity = characterControl(app);
  addSpriteToEnd(navContainer, buttonUniversity, 8);

  const buttonPost = createButton('buttonPost');
  addSpriteToEnd(navContainer, buttonPost, 8);
  addSpriteToEnd(navContainer, buttonCallRating, 8);

  app.stage.addChild(navContainer);
}
