
var monkey , monkey_running;
var banana ,bananaImage, obstacle,obstacle1, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 400);

  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  
  ground = createSprite(400,335,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  
 
  obstaclesGroup = createGroup();
   FoodGroup = createGroup();

  
 
  
  score = 0;
  
}

function draw() {
  
  background("lightblue");
  //displaying score
    var survival=0;
    stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+ score,500,50);
  
    stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
 
    
    if (ground.x < 0){
      ground.x = ground.width/4;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
    
    bananas();
  
    obstacle();
    
   
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  
  monkey.collide(ground);
    drawSprites();

   }
  
 
 




function obstacle(){
 if (frameCount % 300 === 0){
   var obstacles = createSprite(600,320 ,10,40);
   obstacles.velocityX = -6;
   
   
   
    obstacles.addImage(obstacleImage);
  
    
   
    //assign scale and lifetime to the obstacle           
    obstacles.scale = 0.1;
    obstacles.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacles);
 }
}

function bananas() {
  
  if (frameCount % 80 === 0) {
    var  banana = createSprite(600,120,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    //add each cloud to the group
     FoodGroup.add(banana);
  }
}





  






