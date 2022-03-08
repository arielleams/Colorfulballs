//global variables
let ellipseX;
let ellipseY;
let mouthHeight = 100;
let furby;

function preload(){
  furby = loadImage('images/furby.png');

}


function setup(){
  createCanvas(windowWidth, windowHeight)
  print(ellipseX)

  ellipseX = random(50, windowWidth-50)
  ellipseY = random(50, windowHeight-50)
  rectMode(CENTER);
  imageMode(CENTER)
}

function draw(){

  if(mouseIsPressed == true){
    background(40, 100, 100);
  }else{
    background(180, 55, 200)
  }

  image(furby, mouseX, mouseY, mouseX, 50);

  stroke(30, 200, 100)
  strokeWeight(1)
  line(20, 40, 300, 200);

  if(keyIsPressed == true){
    strokeWeight(10);
    //random requires at least one argument. Will return a reandom
    //value between the ranges
    stroke(random(255), random(255), random(255))
    //setting the mouthHeight variable to 0
    mouthHeight = 0;
  }else{
    strokeWeight(5);
    stroke(200, 100, 50);
    mouthHeight = 100;
  }

  if(mouseX > windowWidth/2){
    fill(30, 200, 150);
  }else{
    fill(200, 40, 100)
  }

  ellipse(300, 200, 100)
  ellipse(800, 200, 100)
  ellipse(ellipseX, ellipseY, 100);

  rect(windowWidth/2, windowHeight/2, 300, mouthHeight)
}
