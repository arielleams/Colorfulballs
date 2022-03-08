const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  colorMode(HSB, height, height, height);
  noStroke();
  background('rgba(100%,0%,100%,0.5)');
describe('canvas with light purple background');
}
function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
