var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400,200,50,80);
fixedRect.shapeColor= "red";

  movingRect=createSprite(300,100,80,30);
  movingRect.shapeColor= "blue";

  fixedRect.debug= true;
  movingRect.debug= true;

  car= createSprite(100,350,50,50);
  car.shapeColor= "purple";
  car.velocityX= 4;

  wall= createSprite(500,350,20,80);
  wall.shapeColor= "green";
}

function draw() {
  background(0); 
  movingRect.x= mouseX;
  movingRect.y= mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(IS_TOUCHING(movingRect, wall)){
    movingRect.shapeColor= "cyan";
    fill("yellow");
    textSize(50);
    text("TOUCHED!!");
  }
  BOUNCE_OFF(car,wall);
  drawSprites();
}

