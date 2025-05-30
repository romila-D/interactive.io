function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  background(220);
  
  // Wheels
  fill(0); // Black
  ellipse(280, 300, 50, 50);
  ellipse(370, 300, 50, 50);
  
   
  
  // Car body
  fill(255, 0, 0); // Red
  rect(250, 200, 150, 100);
  
  // Windows
  fill(135, 206, 235); // Sky blue
  rect(260, 210, 60, 50);
  fill(135, 206, 235); // Sky blue
  rect(330, 210, 60, 50);
  
  
 
  
  // Door handles
  fill(0); // Black
  rect(385, 270, 5, 20);
  rect(315, 270, 5, 20);
}