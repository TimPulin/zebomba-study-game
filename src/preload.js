import { Assets } from 'pixi.js';

export async function preload() {
  const assets = [
    { alias: 'map', src: '/img/university.png' },
    { alias: 'path', src: '/img/path.png' },
    { alias: 'pathPoints', src: '/img/path-points.png' },
    { alias: 'avatar', src: '/img/avatar.png' },
    { alias: 'buttonChat', src: '/img/button-chat.png' },
    { alias: 'buttonPost', src: '/img/button-post.png' },
    { alias: 'buttonRating', src: '/img/button-rating.png' },
    { alias: 'buttonUniversity', src: '/img/button-university.png' },
    { alias: 'layoutFriendsBackground', src: '/img/layout-friends-background.png' },
    { alias: 'arrowLeft', src: '/img/arrow-left.png' },
    { alias: 'arrowRight', src: '/img/arrow-right.png' },
    { alias: 'buttonBrown', src: '/img/button-brown.png' },
    { alias: 'buttonPlus', src: '/img/button-plus.png' },
    { alias: 'iconFriend', src: '/img/icon-friend.png' },
  ];
  await Assets.load(assets);
}
