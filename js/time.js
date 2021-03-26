export class Time {
  constructor(color) {
    this.color = color;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  draw(ctx) {
    // ctx.fillStyle = "#48bcff";
    // ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

    ctx.fillStyle = "black";
    ctx.font = "5rem sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    // const textWidth = ctx.measureText("11:32").width;
    ctx.fillText(getTimeToText(), this.stageWidth / 2, this.stageHeight / 2);
  }
}

const getTimeToText = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`;
};
