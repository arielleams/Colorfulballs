let ellipseX
let ellipseY

let mouthHeight = 100

function preload(){
  furby = loadImage('furby.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  print (windowWidth)
  ellipseX = 200
  ellipseY = 200

  rectMode(CENTER)
  imageMode(CENTER)

}

function draw(){

  if(mouseIsPressed == true){
    background(38, 84, 22);
  }else{
    background(500, 20, 200)
  }

  strokeWeight (10)
  stroke (30, 200, 100)
  line (20, 40)

  if(keyIsPressed == true){
    ellipseX = 800
  }else{
    ellipseX= 200
  }

  strokeWeight (5)
  fill(0, 255 ,0)
  fill(0, 255 ,0)
  ellipse(ellipseX, ellipseY, 50, 70)
  triangle(400, 400, 200, 600, 600, 600)
  triangle(800, 400, 600, 600, 1000, 600)
  noStroke();
  fill(255, 0, 0)
  rect(800,650, 300, 100)
  rect(400,650, 300, 100)

}
