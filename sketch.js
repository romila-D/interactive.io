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
  pixelDataManipulation();
}

function pixelDataManipulation() {
  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      // Invert colors
      r = 255 - r;
      g = 255 - g;
      b = 255 - b;
      
      img.pixels[index] = r;
      img.pixels[index + 1] = g;
      img.pixels[index + 2] = b;
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}