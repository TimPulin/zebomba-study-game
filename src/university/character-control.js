import { createButton } from '../utils/create-button.js';
import { Sprite } from 'pixi.js';
import { Character } from './Character.js';

import { studyRoute } from '../data/study-route.js';

export function characterControl(app) {
  const character = createCharacter(app, 'avatar', studyRoute);

  const button = createButton('buttonUniversity');
  button.on('pointerdown', () => {
    animateRoute(app, character.currentRoute, character.sprite);
    character.goToNextPoint();
  });

  app.stage.addChild(button);

  return button;
}

function createCharacter(app, alias, studyRoute) {
  const sprite = createCharacterSprite('avatar');
  const character = new Character(sprite, studyRoute);
  character.sprite.x = character.currentRoute[0].x;
  character.sprite.y = character.currentRoute[0].y;
  app.stage.addChild(character.sprite);
  return character;
}

function animateRoute(app, route, characterSprite, index = 0) {
  if (index >= route.length) return;

  animateCharacter(app, route, characterSprite, 2, index, animateRoute);
}

function animateCharacter(app, route, characterSprite, speed, index, onComplete) {
  const target = route[index];

  function updateCharacter() {
    const dx = target.x - characterSprite.x;
    const dy = target.y - characterSprite.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= speed) {
      characterSprite.x = target.x;
      characterSprite.y = target.y;
      app.ticker.remove(updateCharacter);
      console.log(`✅ Достигнута точка ${index + 1}: (${target.x}, ${target.y})`);

      if (onComplete) {
        onComplete(app, route, characterSprite, index + 1);
      }
      return;
    }

    characterSprite.x += (dx / distance) * speed;
    characterSprite.y += (dy / distance) * speed;
  }

  app.ticker.add(updateCharacter);
}

function createCharacterSprite(alias) {
  const sprite = Sprite.from(alias);
  sprite.anchor.set(0.5, 1);
  return sprite;
}
