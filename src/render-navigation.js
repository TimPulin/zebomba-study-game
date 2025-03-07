import { Container } from 'pixi.js';
import { createChatControl } from './chat/create-chat-control.js';
import { addSpriteToEnd } from './utils/add-sprite-to-end.js';
import { createButton } from './utils/create-button.js';
import { characterControl } from './university/character-control.js';

export async function renderNavigation(app) {
  const navContainer = new Container();
  const paddingBottom = 18;
  const navHeight = 63;
  navContainer.height = navHeight;

  const chatControl = createChatControl(app);

  addSpriteToEnd(navContainer, chatControl, 0);

  function onClickButtonUniversity() {
    console.log('clicked');
  }

  const buttonUniversity = characterControl(app);
  addSpriteToEnd(navContainer, buttonUniversity, 8);

  function onClickButtonPost() {
    console.log('clicked');
  }

  const buttonPost = createButton({
    alias: 'buttonPost',
    coordinates: [0, 0],
    onClick: onClickButtonPost,
  });
  addSpriteToEnd(navContainer, buttonPost, 8);

  function onClickButtonRating() {
    console.log('clicked');
  }

  const buttonRating = createButton({
    alias: 'buttonRating',
    coordinates: [0, 0],
    onClick: onClickButtonRating,
  });
  addSpriteToEnd(navContainer, buttonRating, 8);

  navContainer.x = 10;
  navContainer.y = 549;
  app.stage.addChild(navContainer);
}
