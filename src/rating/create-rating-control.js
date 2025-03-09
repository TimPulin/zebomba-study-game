import { renderRows } from './create-rating-layout.js';
import { rating } from '../data/rating.js';
import { scrollAnimation } from '../utils/scroll-animation.js';

export function createRatingControl(app, layout, buttonCall) {
  const WIDTH_APP_SCREEN = app.screen.width;
  const HEIGHT_APP_SCREEN = app.screen.height;

  const { outerLayout, innerLayout, buttonClose } = layout;

  renderRows(rating.rating, innerLayout.tableLayout.scrollingContainer);

  const scroller = scrollTable(
    app,
    innerLayout.tableLayout.container,
    innerLayout.tableLayout.maskedContainer,
    innerLayout.tableLayout.scrollingContainer,
  );

  placeLayoutToScreenHorizontalCenter(outerLayout, WIDTH_APP_SCREEN);
  closeRatingOnStart(outerLayout);

  innerLayout.tableLayout.container.on('wheel', scroller);

  buttonCall.on('pointerdown', () => {
    openRating(app, outerLayout, HEIGHT_APP_SCREEN);
  });

  buttonClose.on('pointerdown', () => {
    closeRating(app, outerLayout);
  });
}

function openRating(app, layout, heightScreen) {
  const targetPosition = (heightScreen - layout.height) / 2;
  scrollAnimation(app, layout, targetPosition, 10);
}

function closeRating(app, layout) {
  const targetPosition = -layout.height;
  scrollAnimation(app, layout, targetPosition, 10);
}

function closeRatingOnStart(layout) {
  layout.y = -layout.height;
}

function placeLayoutToScreenHorizontalCenter(layout, screenWidth) {
  layout.x = (screenWidth - layout.width) / 2;
}

function scrollTable(app, container, wrapper, rowContainer) {
  let currentY = 0;
  const minY = wrapper.height - rowContainer.height - ((wrapper.height - rowContainer.height) % 32);
  const maxY = 0;
  const step = 32;

  return function scroll(event) {
    if (event.deltaY > 0) {
      currentY = Math.max(currentY - step, minY);
    } else {
      currentY = Math.min(currentY + step, maxY);
    }
    scrollAnimation(app, rowContainer, currentY, 2);
  };
}
