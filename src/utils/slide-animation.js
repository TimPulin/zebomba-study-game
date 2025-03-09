export function slideAnimation(app, element, tagretPosition, speed) {
  function updateElement() {
    const delta = element.x - tagretPosition;
    const distance = Math.abs(delta);

    if (distance < speed) {
      element.x = tagretPosition;
      app.ticker.remove(updateElement);
      return;
    }

    // NOTE знак не менять. Eсли работает в некорректную сторону - добавить флаг
    element.x -= (delta / distance) * speed;
  }

  app.ticker.add(updateElement);
}
