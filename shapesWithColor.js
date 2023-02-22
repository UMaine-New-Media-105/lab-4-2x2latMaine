// Ex 2 - Modify the previous function to include fill and include parameters for HSLA value in the function i.e. I can choose which color I want to filled with the function

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
}

function draw() {
  background(220);
  
  drawTriangle(200, 200, 250, 250, 150, 250, 0, 100, 50, 1);
  drawEllipse(340, 340, 100, 100, 180, 100, 50);
  drawRectangle(100, 100, 150, 150, 120, 100, 50);
  
}

function drawTriangle(x1, y1, x2, y2, x3, y3, h, s, l, a){
  push();
  fill(h, s, l, a);
  triangle(x1, y1, x2, y2, x3, y3);
  pop();
}

function drawEllipse(x, y, width, height, h, s, l, a){
  push();
  fill(h, s, l, a);
  ellipse(x, y, width, height);
  pop();
}

function drawRectangle(x1, y1, x2, y2, h, s, l, a){
  push();
  fill(h, s, l, a);
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x1, y1*2);
  vertex(x2/3, y2);
  endShape(CLOSE);
  pop();
}
