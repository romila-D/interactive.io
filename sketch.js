// stick man's position
let x = 0;
let y = 250;

// stick man's size
let w = 50;
let h = 100;

// stick man's speed
let speed = 3;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(220);

  // draw stick man
  stroke(0); // Black
  strokeWeight(5);

  // stick man head
  fill(255,0,0);
  ellipse(x + w/2, y, 30, 30);

  // stick man body
  line(x + w/2,y + 15,x + w/2,y + h - 15);

  // stick man arms
  line(x + w/2,y + 30,x + w/2 - 20,y + 50);
  line(x + w/2,y + 30,x + w/2 + 20,y + 50);

  // stick man legs
  line(x + w/2,y + h - 15,x + w/2 - 20,y + h + 30);
  line(x + w/2,y + h - 15,x + w/2 + 20,y + h + 30);

  // move the stick man
  x += speed;
}