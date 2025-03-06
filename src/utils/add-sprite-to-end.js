export function addSpriteToEnd(container, sprite, padding = 0) {
  const lastChild = container.children[container.children.length - 1];

  if (lastChild) {
    sprite.x = lastChild.x + lastChild.width + padding;
  } else {
    sprite.x = padding;
  }

  container.addChild(sprite);
}
