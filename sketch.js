let heartColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 182, 193); // Pink background
  angleMode(DEGREES);
  colorMode(RGB, 255);
  heartColor = color(255, 0, 0); // Initial heart color (red)
}

function draw() {
  background(255, 182, 193); // Pink background
  drawHeartPattern();
}

function drawHeartPattern() {
  let heartSize = 50;
  let spacing = 20;
  for (let y = 0; y < height; y += heartSize + spacing) {
    for (let x = 0; x < width; x += heartSize + spacing) {
      drawHeart(x, y, heartSize);
    }
  }
}

function drawHeart(x, y, size) {
  let heartShape = [];
  for (let a = 0; a < 360; a++) {
    let r = size / 2 * (1 + sin(a) * sin(a) * sin(a));
    let px = x + cos(a) * r;
    let py = y + sin(a) * r;
    heartShape.push(createVector(px, py));
  }
  fill(heartColor); // Use the current heart color
  noStroke();
  beginShape();
  for (let v of heartShape) {
    vertex(v.x, v.y);
  }
  endShape(CLOSE);
}

function mousePressed() {
  // Change the heart color to a random color when the mouse is pressed
  let r = random(100, 255);
  let g = random(100, 255);
  let b = random(100, 255);
  heartColor = color(r, g, b);
}