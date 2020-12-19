var xen,hraikurum,mushroom,mushroom_group,obstacle_group,obstacle,ground;



function preload(){ 

}
function setup(){
  createCanvas(1536,600)
  ground = createSprite(1536,600,3000,20)
  
  ground.x = ground.width/2
  obstacle_group= new Group()
  mushroom_group= new Group()
 xen = createSprite(50,580,20,20)
 hraikurum = createSprite(1520,580,20,20)
 
 
  
    
}
function draw(){
  background(20,255,200)
  ground.velocityX = -6 ;
  if(ground.x < 0){
    ground.x = ground.width/2

  }
  if(KEYDOWN("SPACE")){
    xen.velocityY=5
  }
  
  
  spawnobstacle();
  spawnmushrooms();
drawSprites();
}
function spawnobstacle(){
  if(frameCount % 100===0){
    obstacle = createSprite(1500,580,20,20);
    obstacle.velocityX = -6;
    obstacle_group.add(obstacle)
    obstacle.lifetime=290
    


  }
}
function spawnmushrooms(){
  if(frameCount % 500===0){
    mushroom= createSprite(1500,580,40,40);
    mushroom.velocityX = -6;
    mushroom_group.add(obstacle)
    mushroom.lifetime=290

  }
}