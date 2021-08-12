var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 100);
  fixedRect.shapeColor="blue"

  movingRect=createSprite(600,200,100,50);
  movingRect.shapeColor="blue"
}

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y=mouseY;

  if(fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x && 
    fixedRect.width/2 + movingRect.width/2 > fixedRect.x - movingRect.x &&
    fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y && 
    fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y

    ){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
  drawSprites();
}

