let rings = 50;        
let suqares = 100;      
let ringdist = 20;

let angle = 0;
let speed = 0.1;

let ball; 

function setup() {
  createCanvas(500, 500);
  
  angleMode(DEGREES);
  noStroke();
  rectMode(CENTER);
  
  ball = new Ball();
}

function draw() {
  background(0);
  
  push();
  translate(width/2, height/2);
  angle += speed;
  rotate(angle);
  
  for (let i = 0; i < rings; i++) {
    let insideR = 5 + i * ringdist;
    let outseideR = insideR + ringdist;

    for (let j = 0; j < suqares; j++) {
      let angle1 = 360 * j /suqares;
      let angle2 = 360 * (j + 1) /suqares;

      let x1 = cos(angle1) * insideR;
      let y1 = sin(angle1) * insideR;
      let x2 = cos(angle2) * insideR;
      let y2 = sin(angle2) * insideR;
      let x3 = cos(angle2) * outseideR;
      let y3 = sin(angle2) * outseideR;
      let x4 = cos(angle1) * outseideR;
      let y4 = sin(angle1) * outseideR;

      
      let checker = (i + j) % 2 == 0;
      fill(checker ? 0 : 255);
      
      quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
  } pop();
  
  ball.display();
  ball.update();
}

class Ball{
  constructor(){
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;

    this.maxSize = 200;
    this.minSize = 10;
    this.size = 0;
  }
  
  display(){
    push();
    blendMode(DIFFERENCE);
    fill(0, 200, 255, 200);
    circle(mouseX, mouseY, this.size);
    pop();
  }
  
  update(){
    this.dx = mouseX - width / 2;
    this.dy = mouseY - height / 2;
    this.distance = dist(mouseX, mouseY, width / 2, height / 2);

    this.maxSize = 200;
    this.minSize = 10;
    this.size = map(this.distance, 0, width / 2, this.minSize, this.maxSize);
    
    push();
    blendMode(DIFFERENCE);
    fill(0, 200, 255, 200);
    circle(mouseX, mouseY, this.size);
    pop();
  }
}
