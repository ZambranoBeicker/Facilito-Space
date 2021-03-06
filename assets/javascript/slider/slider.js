export default class Slider {
  constructor({ elements, animationFunc }) {
    this.elements = elements;
    this.animationFunc = animationFunc;
    this.index = 0;
    this.size = elements.length;
  }

  next() {
    this.index++;

    if (this.index >= this.size) this.index = 0;

    this.animationFunc(this.elements[this.index]);
  }

  prev() {
    this.index--;

    if (this.index < 0) this.index = this.size - 1;

    this.animationFunc(this.elements[this.index]);
  }

  play() {
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
