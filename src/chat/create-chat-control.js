import { Container, Graphics, Sprite } from 'pixi.js';
import { createButton } from '../utils/create-button.js';
import { addSpriteToEnd } from '../utils/add-sprite-to-end.js';

export function createChatControl() {
  const chatContainer = new Container();
  const friendsContainer = new Container();
  const friendsContainerWidth = 536;
  const friendsContainerPaddingInline = 10;

  friendsContainer.width = friendsContainerWidth;
  const friendsBackgroundSprite = Sprite.from('layoutFriendsBackground');
  friendsContainer.addChild(friendsBackgroundSprite);

  const { slider, slideRight, slideLeft } = creatSlider();
  slider.x = 32;
  slider.y = 6.5;
  const buttonY = Math.floor(friendsContainer.height / 2);

  const buttonSlideLeft = createButtonSlideLeft(friendsContainerPaddingInline, buttonY);

  const buttonSlideRight = createButtonSlideRight(
    friendsContainerWidth - friendsContainerPaddingInline,
    buttonY,
  );

  buttonSlideRight.on('pointerdown', slideRight);
  buttonSlideLeft.on('pointerdown', slideLeft);

  friendsContainer.addChild(buttonSlideLeft);
  friendsContainer.addChild(buttonSlideRight);
  friendsContainer.addChild(slider);

  function onClickButtonChat() {
    console.log('clicked');
  }

  const buttonChat = createButton('buttonChat');

  chatContainer.addChild(friendsContainer, buttonChat);
  buttonChat.x = 539;
  return chatContainer;
}

function creatSlider() {
  const sliderWidth = 472;
  const sliderHeight = 50;

  const mask = new Graphics().rect(0, 0, sliderWidth, sliderHeight).fill(0xffffff).stroke(0xfffff);

  const slider = new Container();

  slider.addChild(mask);
  slider.mask = mask;

  const itemsContainer = new Container();
  slider.addChild(itemsContainer);

  const buttonAddFriend = createButtonAddFriend();
  itemsContainer.addChild(buttonAddFriend);

  for (let i = 0; i < 5; i++) {
    const button = createButton('buttonBrown');
    addFriendIcon(button);
    addSpriteToEnd(itemsContainer, button, 10);
  }

  for (let i = 0; i < 4; i++) {
    const button = createButton('buttonBrown');
    addSpriteToEnd(itemsContainer, button, 10);
  }

  function onClick() {
    console.log('clicked');
  }

  let currentX = 0;
  const minX = -itemsContainer.width + slider.width;
  const maxX = 0;
  const step = 60;

  function slideLeft() {
    currentX = Math.max(currentX - step, minX);
    itemsContainer.x = currentX;
  }

  function slideRight() {
    currentX = Math.min(currentX + step, maxX);
    itemsContainer.x = currentX;
  }

  return { slider, slideRight, slideLeft };
}

function createButtonAddFriend() {
  const button = createButton('buttonBrown');
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
  const button = createButton('arrowLeft');
  button.anchor.set(0, 0.5);

  button.x = x;
  button.y = y;
  return button;
}

function createButtonSlideRight(x, y) {
  const button = createButton('arrowRight');
  button.anchor.set(1, 0.5);
  button.x = x;
  button.y = y;

  return button;
}
