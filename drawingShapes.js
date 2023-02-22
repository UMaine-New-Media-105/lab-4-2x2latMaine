//Ex 1 - Write three functions to create a triangle, ellipse, and any other shape you choose. Ensure that you have defined the function so that you can provide sufficient parameters

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  drawTriangle(200, 200, 250, 250, 150, 250);
  drawEllipse(340, 340, 100, 100);
  drawRectangle(10, 10, 100, 100);
  
}

function drawTriangle(x1, y1, x2, y2, x3, y3){
  triangle(x1, y1, x2, y2, x3, y3);
}

function drawEllipse(x, y, width, height){
  ellipse(x, y, width, height);
}

function drawRectangle(x, y, width, height){
  rect(x, y, width, height);
}
