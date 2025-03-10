import { Application } from 'pixi.js';
import { setup } from './setup.js';
import { preload } from './preload.js';
import { renderBackground } from './render-background.js';
import { renderNavigation } from './render-navigation.js';
import { createRatingLayout } from './rating/create-rating-layout.js';
import { createRatingControl } from './rating/create-rating-control.js';
import { createButton } from './utils/create-button.js';
import { createContactLayout } from './chat/create-contact-layout.js';
import { createContactsControl } from './chat/create-contacts-control.js';
import { getFriends, getRating, getStudyRoute } from './connect/get-data.js';

(async () => {
  const body = document.querySelector('body');
  const root = document.getElementById('app');
  const app = new Application();
  await setup(root, app);
  await preload(app);
  await renderBackground(app);

  const friends = getFriends();
  const rating = getRating();
  const studyRoute = getStudyRoute();

  const chatLayout = createContactLayout();
  createContactsControl({ app, layout: chatLayout.contactList, data: { friends } });

  const ratingLayout = createRatingLayout(app);
  const buttonCallRating = createButton('buttonRating');
  createRatingControl({
    body,
    app,
    layout: ratingLayout,
    buttonCall: buttonCallRating,
    data: { rating, friends },
  });

  await renderNavigation({ app, chatLayout: chatLayout.outerLayout, buttonCallRating });

  renderRatingLayout(app, ratingLayout);
})();

function renderRatingLayout(app, ratingLayout) {
  app.stage.addChild(ratingLayout.outerLayout);
}
