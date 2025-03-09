export function createContactsControl({
  maskedLayout,
  slidingLayout,
  buttonSlideLeft,
  buttonSlideRight,
}) {
  const { slideLeft, slideRight } = slide(maskedLayout, slidingLayout);

  buttonSlideRight.on('pointerdown', slideRight);
  buttonSlideLeft.on('pointerdown', slideLeft);
}

function slide(maskedLayout, slidingLayout) {
  let currentX = 0;
  const minX = -slidingLayout.width + maskedLayout.width;
  const maxX = 0;
  const step = 60;

  function slideLeft() {
    currentX = Math.max(currentX - step, minX);
    slidingLayout.x = currentX;
  }

  function slideRight() {
    currentX = Math.min(currentX + step, maxX);
    slidingLayout.x = currentX;
  }

  return { slideLeft, slideRight };
}
