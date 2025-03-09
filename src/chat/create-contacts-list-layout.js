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

  const buttonAddFriend = createButtonAddFriend();
  slidingLayout.addChild(buttonAddFriend);

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

  return { maskedLayout, slidingLayout };
}

export function createSlots(contactList, layout) {
  const SLOTS_AMOUNT_FOR_DEMONSTRATION = 8;
  const SLOTS_AMOUNT = 7;

  contactList.forEach((contact) => {
    const button = createButton('buttonBrown');
    addFriendIcon(button);
    addSpriteToEnd(layout, button, 10);
  });
  console.log(contactList.length < SLOTS_AMOUNT_FOR_DEMONSTRATION);
  if (contactList.length < SLOTS_AMOUNT_FOR_DEMONSTRATION) {
    const amountEmptySlots = SLOTS_AMOUNT_FOR_DEMONSTRATION - contactList.length;
    renderEmptySlots(layout, amountEmptySlots);
  }
}

function renderEmptySlots(layout, amountSlots) {
  console.log(amountSlots);
  for (let i = 0; i < amountSlots; i++) {
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
  const slot = createButton('buttonBrown');
  return slot;
}
