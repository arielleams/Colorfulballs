let furby;
let furbyBrushBool = false;
let ellipseBrushBool = false;


let counter = 0;

function preload(){
  furby = loadImage('images/furby.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  background(255);
  imageMode(CENTER);

  for(let i = 0; i<1000; i++){
  //  ellipse(random(windowWidth), random(windowHeight), 20, 20)
    image(furby,random(windowWidth), random(windowHeight), 20, 20)
    print(i)
  }
}


function draw(){

  //check against booleans, if they are true use brush
  if(ellipseBrushBool == true){
    ellipseBrush();
  }

  if(furbyBrushBool == true){
    furbyBrush();
  }
}

//custom furby brush function
function furbyBrush(){
  if(mouseIsPressed === true){
    image(furby, mouseX, mouseY, 40, 40);
  }
}

//custom ellipse brush
function ellipseBrush(){
  if(mouseIsPressed === true){
    fill(random(255), random(255), random(255), 50)
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function keyPressed(){
  if(key == 'e'){
    ellipseBrushBool = true;
    furbyBrushBool = false;
  }

  if(key == 'f'){
    furbyBrushBool = true;
    ellipseBrushBool = false;
  }

  //clear the screen and turn off brushes
  if(key == 'c'){
    background(255);
    furbyBrushBool = false;
    ellipseBrushBool = false;
  }

  if(key == 's'){
    save('paint.jpg')
  }
}
