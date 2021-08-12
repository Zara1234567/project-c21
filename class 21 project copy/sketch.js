var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
    
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed   
  bullet.shapeColor="white"
  console.log(bullet.velocityX)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="white"
  
}

function draw() {
  background(0);  

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed/(thickness*thickness*thickness)
    if (damage>10){
      wall.shapeColor=(225,0,0)
    }

    if (damage<10){
      wall.shapeColor=(0,225,0)
    }
  }



  drawSprites();
}   

function hasCollided(lbullet,lwall){
  bulletrightEdge=lbullet.x+lbullet.width
  wallleftEdge=lwall.x
  if(bulletrightEdge<=wallleftEdge){
    return true
  }

  return false;
}