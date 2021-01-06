function setup() {
  createCanvas(800,400);
   fixedrect= createSprite(400, 200, 50, 50);
   fixedrect.shapeColor="green";
   fixedrect.debug=true;
   movingrect=createSprite (200,200,50,50);
   movingrect.shapeColor="green";
   movingrect.debug=true;

}

function draw() {
  background(255,255,255);  
  movingrect.x=world.mouseX;
  movingrect.y=world.mouseY;
  if (movingrect.x-fixedrect.x===fixedrect.width/2+movingrect.width/2){
		fixedrect.shapeColor="red";
		movingrect.shapeColor="yellow";
  }
  else {
		movingrect.shapeColor="green";
		fixedrect.shapeColor="green";
  }
  drawSprites();
}