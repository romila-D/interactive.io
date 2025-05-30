let quote = "Believe in yourself.";
let words = quote.split(" ");
let fontSizes = [24, 36, 48, 60];
let fontColors = ["#67630A", "#9C27B0", "#009688"];
let angles = [0, 0, 0, 0];
let velocities = [0.5, 1, 1.5, 2];
let yPositions = [200, 300, 400, 500];

function setup() {
  createCanvas(1000, 1000);
  background(255);
  textSize(24);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(173, 216 , 230);
  
  fill(0);
  textSize(32);
  text("Click On The Words", width / 2, 50);
  
  
  for (let i = 0; i < words.length; i++) {
    fill(fontColors[i % fontColors.length]);
    textSize(fontSizes[i % fontSizes.length]);
    push();
    translate(width / 2, yPositions[i]);
    rotate(radians(angles[i]));
    text(words[i], 0, 0);
    pop();
    
    angles[i] += velocities[i];
    
    if (angles[i] > 360) {
      angles[i] -= 360;
    }
  }
}

function mousePressed() {
  for (let i = 0; i < words.length; i++) {
    if (dist(mouseX, mouseY, width / 2, yPositions[i]) < 50) {
      velocities[i] *= -1;
    }
  }
}