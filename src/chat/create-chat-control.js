import { Container, Sprite } from 'pixi.js';
import { createButton } from '../utils/create-button.js';
import { addSpriteToEnd } from '../utils/add-sprite-to-end.js';

export function createChatControl() {
  const chatContainer = new Container();
  const friendsContainer = new Container();
  const friendsContainerWidth = 536;
  const friendsContainerPaddingInline = 10;
  const FITTING_WIDTH = 7;
  const FITTING_HEIGHT = 3;
  friendsContainer.width = friendsContainerWidth;
  const friendsBackgroundSprite = Sprite.from('layoutFriendsBackground');
  friendsContainer.addChild(friendsBackgroundSprite);

  const slider = creatSlider();
  slider.x = Math.floor((friendsContainer.width - slider.width) / 4 + FITTING_WIDTH);
  slider.y = (friendsContainer.height - slider.height) / 2 + FITTING_HEIGHT;

  const buttonY = Math.floor(friendsContainer.height / 2);

  const buttonSlideLeft = createButtonSlideLeft(friendsContainerPaddingInline, buttonY);

  const buttonSlideRight = createButtonSlideRight(
    friendsContainerWidth - friendsContainerPaddingInline,
    buttonY,
  );

  friendsContainer.addChild(buttonSlideLeft);
  friendsContainer.addChild(buttonSlideRight);
  friendsContainer.addChild(slider);

  function onClickButtonChat() {
    console.log('clicked');
  }

  const buttonChat = createButton({
    alias: 'buttonChat',
    coordinates: [0, 0],
    onClick: onClickButtonChat,
  });

  addSpriteToEnd(chatContainer, friendsContainer);

  addSpriteToEnd(chatContainer, buttonChat, 3);

  return chatContainer;
}

function creatSlider() {
  const slider = new Container();
  slider.width = 472;

  const buttonAddFriend = createButtonAddFriend();
  addSpriteToEnd(slider, buttonAddFriend, 10);

  for (let i = 0; i < 5; i++) {
    const button = createButton({ alias: 'buttonBrown', coordinates: [0, 0], onClick });
    addFriendIcon(button);
    addSpriteToEnd(slider, button, 10);
  }

  for (let i = 0; i < 2; i++) {
    const button = createButton({ alias: 'buttonBrown', coordinates: [0, 0], onClick });
    addSpriteToEnd(slider, button, 10);
  }

  function onClick() {
    console.log('clicked');
  }

  return slider;
}

function createButtonAddFriend() {
  const button = createButton({ alias: 'buttonBrown', coordinates: [0, 0], onClick });
  addFriendIcon(button);
  const spritePlus = Sprite.from('buttonPlus');
  spritePlus.x = button.width - 15;
  spritePlus.y = -5;
  button.addChild(spritePlus);

  function onClick() {}

  return button;
}

function addFriendIcon(element) {
  const paddingBottom = 3;
  const friendIcon = Sprite.from('iconFriend');
  friendIcon.anchor.set(0.5, 1);
  friendIcon.x = element.width / 2;
  friendIcon.y = element.height - paddingBottom;
  element.addChild(friendIcon);
}

function createButtonSlideLeft(x, y) {
  const button = createButton({
    alias: 'arrowLeft',
    coordinates: [x, y],
    onClick,
  });
  button.anchor.set(0, 0.5);

  function onClick() {
    console.log('onClick');
  }

  return button;
}

function createButtonSlideRight(x, y) {
  const button = createButton({
    alias: 'arrowRight',
    coordinates: [x, y],
    onClick,
  });
  button.anchor.set(1, 0.5);

  function onClick() {
    console.log('onClick');
  }

  return button;
}
