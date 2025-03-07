import { createButton } from '../utils/create-button.js';
import { renderRatingLayout, renderRows } from './renderRatingLayout.js';
import { rating } from '../data/rating.js';
import { scrollAnimation } from '../utils/scroll-animation.js';

export function createRating(app) {
  const buttonRating = createButton('buttonRating');
  const ratingLayout = renderRatingLayout(app.screen.width, app.screen.height);

  renderRows(rating.rating, ratingLayout.innerLayout.tableLayout.rowContainer);

  const scroller = scrollTable(
    app,
    ratingLayout.innerLayout.tableLayout.container,
    ratingLayout.innerLayout.tableLayout.wrapper,
    ratingLayout.innerLayout.tableLayout.rowContainer,
  );

  ratingLayout.innerLayout.tableLayout.container.on('wheel', scroller);

  return { buttonRating, ratingLayout };
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
