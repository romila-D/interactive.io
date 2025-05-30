
function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  background(220);
  
  // Face
  fill(0, 255, 0); // Green
  ellipse(300, 170, 100, 150);
  
  // Body
  fill(0, 255, 0); // Green
  ellipse(300, 300, 150, 200);
  
  // Eyes
  fill(255); // big
  ellipse(275, 135, 25, 25);
  ellipse(325, 135, 25, 25);
  fill(0); // small
  ellipse(275, 135, 10, 10);
  ellipse(325, 135, 10, 10);
  
  // lips
  fill(0); // Black
  arc(300, 175, 50, 25, 0, PI);
  
  // Antina
  stroke(0); // Black
  strokeWeight(5);
  line(300, 130, 300, 100);
  strokeWeight(2);
  line(300, 100, 250, 50);
  line(300, 100, 350, 50);
}