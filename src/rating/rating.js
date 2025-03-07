import { createButton } from '../utils/create-button.js';
import { renderRatingLayout } from './renderRatingLayout.js';

export function createRating(app) {
  const buttonRating = createButton('buttonRating');
  const ratingLayout = renderRatingLayout(app.screen.width, app.screen.height);

  return { buttonRating, ratingLayout };
}
