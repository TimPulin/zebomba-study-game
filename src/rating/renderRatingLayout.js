import { Container, Graphics, Sprite, Text } from 'pixi.js';
import { createButton } from '../utils/create-button.js';

export function renderRatingLayout(screenWidth, screenHeight) {
  const outerLayout = Sprite.from('outerLayoutRating');
  outerLayout.x = (screenWidth - outerLayout.width) / 2;
  outerLayout.y = (screenHeight - outerLayout.width) / 2;

  const title = createTitle(outerLayout);
  const buttonClose = createButtonClose(outerLayout);
  const innerLayout = createInnerLayout(outerLayout);

  outerLayout.addChild(title, buttonClose, innerLayout.layout);

  return { outerLayout, innerLayout };
}

function createButtonClose(outerLayout) {
  const button = createButton('buttonCross');
  button.x = outerLayout.width - 45;
  button.y = 15;
  return button;
}

function createTitle(outerLayout) {
  const title = Sprite.from('titleRating');
  title.anchor.set(0.5, 0.5);
  title.x = outerLayout.width / 2;
  return title;
}

function createInnerLayout(outerLayout) {
  const layout = Sprite.from('innerLayoutRating');
  layout.x = (outerLayout.width - layout.width) / 2;
  layout.y = 95;

  const titleTable = createTitleTable(layout);
  const tableLayout = createTableLayout(layout);

  layout.addChild(titleTable, tableLayout.container);

  return {
    layout,
    tableLayout,
  };
}

function createTitleTable(layout) {
  const title = Sprite.from('titleTable');
  title.anchor.set(0.5, 0);
  title.x = layout.width / 2;
  title.y = 30;
  return title;
}

function createTableLayout(layout) {
  const PADDING = 30;
  const container = new Container();
  container.x = PADDING;
  container.y = 65;

  const wrapper = new Container();
  container.addChild(wrapper);

  const mask = new Graphics().rect(0, 0, layout.width - PADDING * 2, 224).fill(0xffffff);
  wrapper.addChild(mask);
  wrapper.mask = mask;

  const rowContainer = new Container();
  container.eventMode = 'static';
  container.cursor = 'pointer';

  wrapper.addChild(rowContainer);

  return { container, wrapper, rowContainer };
}

export function renderRows(rating, rowContainer) {
  rating.forEach((item, index) => {
    const place = String(index + 1);
    const name = `${item.lastName} ${item.name}`;
    const points = String(item.points);

    const row = createRow(place, name, points);
    row.y = (row.height + 5) * index;
    rowContainer.addChild(row);
  });
}

function createRow(place, name, points) {
  const container = new Container();
  const sprite = Sprite.from('blueBackground');
  const placeText = createText(place);
  placeText.x = 30;

  const nameText = createText(name);
  nameText.x = 100;

  const pointsText = createText(points);
  pointsText.x = 330;

  container.addChild(sprite, placeText, nameText, pointsText);
  return container;
}

function createText(string) {
  const text = new Text(string, {
    fontSize: 18,
    fill: 0xffffff,
  });
  text.y = 4;
  return text;
}
