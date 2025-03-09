import { slideAnimation } from '../utils/slide-animation.js';

export function createContactsControl({ app, layout }) {
  const { maskedLayout, slidingLayout, buttonSlideLeft, buttonSlideRight } = layout;
  const { slideLeft, slideRight } = slide(app, maskedLayout, slidingLayout);

  buttonSlideRight.on('pointerdown', slideRight);
  buttonSlideLeft.on('pointerdown', slideLeft);
}

function slide(app, maskedLayout, slidingLayout) {
  let currentX = 0;
  const minX = -slidingLayout.width + maskedLayout.width;
  const maxX = 0;
  const step = 60;

  function slideLeft() {
    currentX = Math.max(currentX - step, minX);
    slideAnimation(app, slidingLayout, currentX, 10);
  }

  function slideRight() {
    currentX = Math.min(currentX + step, maxX);
    slideAnimation(app, slidingLayout, currentX, 10);
  }

  return { slideLeft, slideRight };
}
