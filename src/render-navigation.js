import { Container } from 'pixi.js';
import { createChatControl } from './chat/create-chat-control.js';
import { addSpriteToEnd } from './utils/add-sprite-to-end.js';
import { createButton } from './utils/create-button.js';
import { characterControl } from './university/character-control.js';
import { createRating } from './rating/rating.js';

export async function renderNavigation(app) {
  const navContainer = new Container();

  const chatControl = createChatControl();

  addSpriteToEnd(navContainer, chatControl, 0);

  const buttonUniversity = characterControl(app);
  addSpriteToEnd(navContainer, buttonUniversity, 8);

  const buttonPost = createButton('buttonPost');
  addSpriteToEnd(navContainer, buttonPost, 8);

  const { buttonRating, ratingLayout } = createRating(app);
  addSpriteToEnd(navContainer, buttonRating, 8);

  navContainer.x = 10;
  navContainer.y = 549;
  app.stage.addChild(navContainer, ratingLayout);
}
