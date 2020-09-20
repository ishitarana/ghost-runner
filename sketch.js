var gamestate="play"
var climberimg,doorimg,ghostimg,towerimg;
var climber,door,ghost,tower,climbergroup,doorgroup;
function preload(){
climberimg=loadImage("climber.png")
doorimg=loadImage("door.png")
ghostimg=loadImage("ghost-standing.png")  
towerimg=loadImage("tower.png") 
}
function setup(){
createCanvas(600,600)
tower=createSprite(300,300)
tower.addImage(towerimg)
tower.velocityY=1
ghost=createSprite(200,200)
ghost.addImage(ghostimg)  
ghost.scale=0.5  
doorgroup=new Group()
climbergroup=new Group()  
}
function draw(){
background("black")
drawSprites()
 if(gamestate=="play"){                   
  if(keyDown("space")){
    ghost.velocityY=-6
  }
   ghost.velocityY=ghost.velocityY+0.1
  if(tower.y>600){
    tower.y=300
  }
  if(keyDown("left")){
    ghost.x=ghost.x-4
  }
   if(keyDown("right")){
    ghost.x=ghost.x+4
  }
windows()
if(ghost.isTouching(climbergroup)){
  ghost.destroy()
gamestate="end"
}
}
if(gamestate=="end"){
  textSize(50)
  fill("brown")
  text("gameover",200,300)
tower.velocityY=0
  doorgroup.setVelocityYEach(0)
  climbergroup.setVelocityYEach(0)
}
} 
 function windows(){
   if(frameCount%180==0)
   {door=createSprite(200,-50)
    door.addImage(doorimg)
    door.velocityY=1
  door.x=Math.round(random(100,300))
  climber=createSprite(200,10)
   climber.addImage(climberimg)
    climber.velocityY=1
    climber.x=door.x
  doorgroup.add(door)
   climbergroup.add(climber) 
   }}

