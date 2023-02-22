//Ex 3 - Write a function that draws a sprite of your choice. Ensure it has sufficient parameters to modify the position, size, and the color. Also Include an if-else statement in the function so that when the mouse is pressed the sprite becomes a second sprite of your choice. 

myX = 200;
myY = 200;
mySize = 1;

function setup() {
  createCanvas(400, 400);
  
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0, 100, 100);
  
  if (mouseIsPressed){
    drawSun();
    drawPuddle(myX, myY, mySize);
  } else {
    drawSnowman(myX, myY, mySize, "white");
  }
}

function drawSnowman(x, y, size, color) {
  push();
  noStroke();
  translate(x, y);
  scale(size);
  
  push();
  translate(-100, -100);
  
  fill(color);
  
  //Snow Man
  ellipse(100, 100, 75, 75);
  ellipse(100, 150, 100, 100);
  
  //Hat
  fill(0);
  rect(100, 50, 50, 60, 5);
  rect(100, 70, 80, 20, 20);
  
  //Nose and Eyes
  ellipse(80, 90, 10, 10);
  ellipse(120, 90, 10, 10);
  
  fill(255, 168, 60);
  ellipse(100, 100, 10, 10);
  
  //Buttons
  fill(0);
  ellipse(100, 135, 10, 10);
  ellipse(100, 150, 10, 10);
  ellipse(100, 165, 10, 10);
  
  pop();
  pop();
}

function drawSun() {
  push();
  fill("yellow")
  stroke("yellow");
  strokeWeight(10);
  
  ellipse(25, 25, 200, 200);
  
  line(0, 0, 200, 0);
  rotate(15);
  line(0, 0, 200, 0);
  rotate(15);
  line(0, 0, 200, 0);
  rotate(15);
  line(0, 0, 200, 0);
  rotate(15);
  line(0, 0, 200, 0);
  rotate(15);
  line(0, 0, 200, 0);
  rotate(15);
  line(0, 0, 200, 0);
  pop();
}

function drawPuddle(x, y, size) {
  push();
  noStroke();
  translate(x, y);
  scale(size);
  fill("skyblue");
  ellipse(0, 100, 200, 100);
  pop();
}
