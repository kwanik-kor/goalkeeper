import { Time } from "./time.js";

class Clock {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.querySelector(".clock-container").appendChild(this.canvas);

    this.time = new Time("#000");

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.querySelector(".clock-container").clientWidth;
    this.stageHeight = document.querySelector(".clock-container").clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.time.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.time.draw(this.ctx);
  }
}

window.onload = () => {
  new Clock();
};
