let song;
let amp;
let fft;

function preload() {
  song = loadSound('letmeloveu.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
  fft = new p5.FFT();
  song.play();
}

function draw() {
  background(0);
  let soundLevel = amp.getLevel();
  let spectrum = fft.analyze();
  
  // Draw circles
  noStroke();
  fill(255, 0, 0); // Red color
  ellipse(width / 2, height / 2, 200 + soundLevel * 100);
  
  fill(255, 150, 150); // Light red color
  ellipse(width / 2, height / 2, 100 + soundLevel * 50);
  
  fill(0); // Black color
  ellipse(width / 2, height / 2, 20 + soundLevel * 10);
  
  // Draw white waves
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let frequencyValue = spectrum[i];
    let x = map(i, 0, spectrum.length, 0, width);
    let y = height / 2 + map(frequencyValue , 0, 255, -height / 2, height / 2);
    vertex(x, y);
  }
  endShape();
}