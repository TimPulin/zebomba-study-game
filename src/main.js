import './style.css';
import { Application } from 'pixi.js';

(async () => {
  const app = new Application();
  await app.init({
    width: 980,
    height: 630,
    backgroundColor: '#149483',
  });

  const root = document.getElementById('app');
  if (root) {
    root.appendChild(app.canvas);
  }
})();
