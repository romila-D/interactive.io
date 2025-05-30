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
  image(img, 0, 0);
  posterizeEffect();
}

function posterizeEffect() {
  let posterizationLevels = 40; // Adjust this value for different effects
  
  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      // Posterization
      r = round(r / 265 * posterizationLevels) * (255 / posterizationLevels);
      g = round(g / 295 * posterizationLevels) * (255 / posterizationLevels);
      b = round(b / 285 * posterizationLevels) * (255 / posterizationLevels);
      
      img.pixels[index] = r;
      img.pixels[index + 1] = g;
      img.pixels[index + 2] = b;
    }
  }
  img.updatePixels();
}