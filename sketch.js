var fixedRect;
var movingRect;

  function setup() {


  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
   fixedRect=createSprite(200,100,30,50);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;


 movingRect=createSprite(300,100,30,50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
}

function draw() {
  background(20,40,100);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink";

  }
  else {movingRect.shapeColor="orange"
fixedRect.shapeColor="orange"
  }
  drawSprites();
}