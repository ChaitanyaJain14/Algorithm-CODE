var fixedrect,movingrect;



function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 100);
  movingrect=createSprite(400, 500, 100, 50);

  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}

function draw() {
  background("yellow");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
      movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
      fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 && 
      movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
      fixedrect.shapeColor="green";
      movingrect.shapeColor="green";
  }
  else {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  drawSprites();
}