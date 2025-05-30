let img;

function preload() {
  img = loadImage('senery.jpg'); 
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  noLoop();
}

function draw() {
  background(0);
  pointillismEffect();
}

function pointillismEffect() {
  let pointSize = 5; // Adjust this value for different effects
  
  img.loadPixels();
  for (let y = 0; y < img.height; y += pointSize) {
    for (let x = 0; x < img.width; x += pointSize) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      fill(r, g, b);
      noStroke();
      ellipse(x, y, pointSize, pointSize);
    }
  }
}