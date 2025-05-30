let destinations = [
  { name: 'Beach', percentage: 35, image: 'beach.jpg' },
  { name: 'Mountains', percentage: 20, image: 'mountains.jpg' },
  { name: 'Nature/Gardens', percentage: 15, image: 'nature.jpg' },
  { name: 'Islands', percentage: 12, image: 'island.jpg' },
  { name: 'Village/Townhouses', percentage: 8, image: 'village.jpg' },
  { name: 'City', percentage: 5, image: 'city.jpg' },
  { name: 'Other', percentage: 5, image: 'movie.jpg' }
];

let colors = [
  '#FF69B4', // Beach
  '#8B9467', // Mountains
  '#3E8E41', // Nature/Gardens
  '#4682B4', // Islands
  '#964B00', // Village/Townhouses
  '#808080', // City
  '#C0C0C0'  // Other
];

let angle = 0;
let clickedIndex = -1;
let images = [];

function preload() {
  for (let i = 0; i < destinations.length; i++) {
    images.push(loadImage(destinations[i].image));
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  fill(0);
  textSize(28);
  text(" Click on the Slice ", width / 2 , 50 );
  
  let lastAngle = 0;
  for (let i = 0; i < destinations.length; i++) {
    let destination = destinations[i];
    let angle = map(destination.percentage, 0, 100, 0, TWO_PI);
    fill(colors[i]);
    noStroke();
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + angle);
    lastAngle += angle;

    // Display destination name and percentage
    let textAngle = lastAngle - angle / 2;
    let textX = width / 2 + cos(textAngle) * 150;
    let textY = height / 2 + sin(textAngle) * 150;
    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(destination.name + ': ' + destination.percentage + '%', textX, textY);
  }

  // Check if mouse is clicking on a slice
  if (mouseIsPressed) {
    let mouseAngle = atan2(mouseY - height / 2, mouseX - width / 2);
    if (mouseAngle < 0) mouseAngle += TWO_PI;
    let lastAngle = 0;
    for (let i = 0; i < destinations.length; i++) {
      let destination = destinations[i];
      let angle = map(destination.percentage, 0, 100, 0, TWO_PI);
      if (mouseAngle >= lastAngle && mouseAngle <= lastAngle + angle) {
        clickedIndex = i;
      }
      lastAngle += angle;
    }
  }

  // Display image if clicking on a slice
  if (clickedIndex != -1) {
    let destination = destinations[clickedIndex];
    let img = images[clickedIndex];
    imageMode(CENTER);
    image(img, width / 2, height / 2, 200, 200);
  }
}