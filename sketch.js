let caterpillar = [];
let caterpillarLength = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(144, 238, 144); }


function draw() {
  background(144, 238, 144, 10); 
  
  fill(0);
  textSize(28);
text("Move the Caterpillar" , width / 2 , 50);
  
  
  caterpillar.push({x: mouseX, y: mouseY});
  

  if (caterpillar.length > caterpillarLength) {
    caterpillar.shift();
  }
  
  
  for (let i = 0; i < caterpillar.length; i++) {
    let circle = caterpillar[i];
    if (i == caterpillar.length - 1) {
    
      fill(255, 255, 0); 
      noStroke();
      ellipse(circle.x, circle.y, 20, 20);
      
      
      fill(0); 
      ellipse(circle.x - 5, circle.y - 5, 5, 5);
      ellipse(circle.x + 5, circle.y - 5, 5, 5);
      arc(circle.x, circle.y + 5, 10, 5, 0, PI);
    } else {
      
      fill(255, 255, 0); 
      noStroke();
      ellipse(circle.x, circle.y, 15, 15);
    }
  }
}