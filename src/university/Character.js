export class Character {
  #currentIndex = 0;

  constructor(sprite, route) {
    this.sprite = sprite;
    this.studyRoute = route;
    this.#setCurrentPoint();
    this.#setCurrentRoute();
  }

  goToNextPoint() {
    this.#incrementIndex();
    this.#setCurrentPoint();
    this.#setCurrentRoute();
  }

  endOfStudy() {}

  restart() {
    this.#resetIndex();
    this.#setCurrentPoint();
    this.#setCurrentRoute();
  }

  #incrementIndex() {
    if (this.#currentIndex < this.studyRoute.length - 1) {
      this.#currentIndex++;
    } else {
      this.endOfStudy();
    }
  }

  #resetIndex() {
    this.#currentIndex = 0;
  }

  #setCurrentPoint() {
    this.currentPoint = this.studyRoute[this.#currentIndex].name;
  }

  #setCurrentRoute() {
    this.currentRoute = this.studyRoute[this.#currentIndex].route;
  }
}
