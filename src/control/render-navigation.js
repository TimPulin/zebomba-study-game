import { Assets, Container, Sprite } from 'pixi.js';

export async function renderNavigation(app) {
  const assets = [
    { alias: 'buttonChat', src: '/img/button-chat.png' },
    { alias: 'buttonPost', src: '/img/button-post.png' },
    { alias: 'buttonRating', src: '/img/button-rating.png' },
    { alias: 'buttonUniversity', src: '/img/button-university.png' },
    { alias: 'layoutFriendsBackground', src: '/img/layout-friends-background.png' },
  ];
  await Assets.load(assets);

  const navContainer = new Container();
  const paddingBottom = 18;
  const navHeight = 63;
  navContainer.height = navHeight;
  navContainer.y = app.screen.height - (navHeight + paddingBottom);
  app.stage.addChild(navContainer);

  const friendsContainer = new Container();
  const friendsBackgroundSprite = Sprite.from('layoutFriendsBackground');
  friendsContainer.addChild(friendsBackgroundSprite);
  addSpriteToEnd(navContainer, friendsContainer, 4);

  function onClickButtonChat() {
    console.log('clicked');
  }

  const buttonChat = createButton({ alias: 'buttonChat', coordinates: [0, 0], onClick: onClickButtonChat });
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
    onClick: onClickButtonPost,
  });
  addSpriteToEnd(navContainer, buttonRating, 8);
}

function createButton({ alias, coordinates: [x, y], onClick }) {
  const button = Sprite.from(alias);
  button.x = x;
  button.y = y;

  button.eventMode = 'static';
  button.cursor = 'pointer';
  button.on('pointerdown', onClick);

  return button;
}

function addSpriteToEnd(container, sprite, padding = 0) {
  const lastChild = container.children[container.children.length - 1];

  if (lastChild) {
    sprite.x = lastChild.x + lastChild.width + padding;
  } else {
    sprite.x = padding;
  }

  container.addChild(sprite);
}
