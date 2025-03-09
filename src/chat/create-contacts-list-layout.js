import { Container, Graphics, Sprite } from 'pixi.js';
import { createButton } from '../utils/create-button.js';
import { addSpriteToEnd } from '../utils/add-sprite-to-end.js';

export function createContactsListLayout() {
  const outerContainer = new Container();
  const outerContainerWidth = 536;
  const outerContainerPaddingInline = 10;

  const contactsBackgroundSprite = Sprite.from('layoutFriendsBackground');
  outerContainer.addChild(contactsBackgroundSprite);

  const { maskedLayout, slidingLayout } = creatSliderLayout();
  maskedLayout.x = 32;
  maskedLayout.y = 6.5;
  const buttonY = Math.floor(outerContainer.height / 2);

  const buttonSlideLeft = createButtonSlideLeft(outerContainerPaddingInline, buttonY);

  const buttonSlideRight = createButtonSlideRight(
    outerContainerWidth - outerContainerPaddingInline,
    buttonY,
  );

  outerContainer.addChild(buttonSlideLeft);
  outerContainer.addChild(buttonSlideRight);
  outerContainer.addChild(maskedLayout);

  return {
    outerContainer,
    slider: { maskedLayout, slidingLayout, buttonSlideLeft, buttonSlideRight },
  };
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

function creatSliderLayout() {
  const sliderWidth = 470;
  const sliderHeight = 50;

  const mask = new Graphics().rect(0, 0, sliderWidth, sliderHeight).fill(0xffffff);

  const maskedLayout = new Container();

  maskedLayout.addChild(mask);
  maskedLayout.mask = mask;

  const slidingLayout = new Container();
  maskedLayout.addChild(slidingLayout);

  const buttonAddFriend = createButtonAddFriend();
  slidingLayout.addChild(buttonAddFriend);

  createSlots(slidingLayout);

  return { maskedLayout, slidingLayout };
}

export function createSlots(layout) {
  for (let i = 0; i < 5; i++) {
    const button = createButton('buttonBrown');
    addFriendIcon(button);
    addSpriteToEnd(layout, button, 10);
  }

  for (let i = 0; i < 4; i++) {
    const button = createEmptySlot();
    addSpriteToEnd(layout, button, 10);
  }
}

function createButtonAddFriend() {
  const button = createButton('buttonBrown');
  addFriendIcon(button);
  const spritePlus = Sprite.from('buttonPlus');
  spritePlus.x = button.width - 15;
  spritePlus.y = -5;
  button.addChild(spritePlus);

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

function createEmptySlot() {
  const slot = Sprite.from('buttonBrown');
  return slot;
}
