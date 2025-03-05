import { Assets } from 'pixi.js';

export async function preload() {
  const assets = [
    { alias: 'map', src: '/img/university.png' },
    { alias: 'path', src: '/img/path.png' },
    { alias: 'pathPoints', src: '/img/path-points.png' },
    { alias: 'avatar', src: '/img/avatar.png' },
  ];
  await Assets.load(assets);
}
