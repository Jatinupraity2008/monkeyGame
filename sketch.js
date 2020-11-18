var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score = 0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(100,315,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(200,350,800,10);
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white");
  stroke("white");
  fill("white");
  textSize(20);
  text("score "+score,350,20);
  
  stroke("black");
  fill("black");
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time "+survivalTime,120,50);
  if(keyDown("space")){
     monkey.velocityY=-15;
  }
  
  monkey.velocityY=monkey.velocityY+1;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  ground.velocityX=-3;
  monkey.collide(ground);
  food();
  obstacle();
  drawSprites();
}

function food(){
  if(frameCount % 80===0){
    var banana = createSprite(400,200,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-3;
    banana.lifetime=130;
    banana.y=Math.round(random(120,200));
    FoodGroup.add(banana);
  }
}
function obstacle(){
  if(frameCount % 200===0){
    var obstacle = createSprite(400,328,10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=130;
    obstacleGroup.add(obstacle);
  }
}




