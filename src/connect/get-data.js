import { studyRoute } from '../data/study-route.js';
import { rating } from '../data/rating.js';

export function getStudyRoute() {
  return studyRoute;
}

export function getRating() {
  return rating.rating;
}

export function getFriends() {
  return rating.friends;
}
