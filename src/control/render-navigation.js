import { Container, Graphics } from 'pixi.js';
import { renderFriendsContainer } from './render-friends-container.js';
import { addSpriteToEnd } from '../utils/add-sprite-to-end.js';
import { createButton } from '../utils/create-button.js';

export async function renderNavigation(app) {
  const navContainer = new Container();
  const paddingBottom = 18;
  const navHeight = 63;
  navContainer.height = navHeight;

  const friendsContainer = renderFriendsContainer();

  addSpriteToEnd(navContainer, friendsContainer, 0);

  function onClickButtonChat() {
    console.log('clicked');
  }

  const buttonChat = createButton({
    alias: 'buttonChat',
    coordinates: [0, 0],
    onClick: onClickButtonChat,
  });
  addSpriteToEnd(navContainer, buttonChat, 3);

  function onClickButtonUniversity() {
    console.log('clicked');
  }

  const buttonUniversity = createButton({
    alias: 'buttonUniversity',
    coordinates: [0, 0],
    onClick: onClickButtonUniversity,
  });
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

  const border = new Graphics();
  border.lineStyle(10, 0xff0000); // Толщина 4px, цвет красный
  border.drawRect(0, 0, navContainer.width, navContainer.height); // Рисуем прямоугольник

  navContainer.x = (app.screen.width - navContainer.width) / 2;
  navContainer.y = app.screen.height - (navHeight + paddingBottom);
  app.stage.addChild(navContainer);
}
