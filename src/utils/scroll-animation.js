export function scrollAnimation(app, element, tagretPosition, speed) {
  function updateElement() {
    const delta = element.y - tagretPosition;
    const distance = Math.abs(delta);

    if (distance < speed) {
      element.y = tagretPosition;
      app.ticker.remove(updateElement);
      return;
    }

    // NOTE знак не менять. Eсли работает в некорректную сторону - добавить флаг
    element.y -= (delta / distance) * speed;
  }

  app.ticker.add(updateElement);
}
