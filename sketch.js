var ship,ship_moving
var sea,sea_moving

function preload(){
  seaImgage = loadImage(sea.png);
  shipImg=loadAnimation("ship-1.png",ship-2.png)
 
}

function setup(){
  createCanvas(600,300);
 ship = createSprite(70,180,20,20,200,30,30);
  ship.addAnimation("moving",shipmoving);
  ship.scale=0.2
  sea=createSprite(10,200,600,10);
 sea.x=sea.width/2
 sea.velocityX =-2;
 sea.visible=false
}

function draw() {

  background(blue)
  if (keyDown("space")) {
    ship.velocityY=-10
  }
  ship.velocityY= ship.velocityY + 0.8
  
  if (sea.x < 0) {
    sea.x= sea.width /2;
    
  }
  ship.collide(sea)
  drawSprites();

}
