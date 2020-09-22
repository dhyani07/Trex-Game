var trex, treximage,trexcollided, ground, groundimage,invisibleground,score, gameover, restart, cloudsgroup, cloudimage, rand, obstaclesgroup, obstacleimage1, obstacleimage2, obstacleimage3, obstacleimage4, obstacleimage5, obstacleimage6;

function preload() {
  treximage = loadAnimation ("trex1.png","trex3.png","trex4.png");
  groundimage = loadImage ("ground2.png");
  cloudimage = loadImage ("cloud.png");
  obstacleimage1 = loadImage ("obstacle1.png");
  obstacleimage2 = loadImage ("obstacle2.png");
  obstacleimage3 = loadImage ("obstacle3.png");
  obstacleimage4 = loadImage ("obstacle4.png");
  obstacleimage5 = loadImage ("obstacle5.png");
  obstacleimage6 = loadImage ("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,10,10);
  trex.addAnimation ("trexrunning",treximage);
  trex.scale = 0.6;
  
  ground = createSprite(200,180,10,10);
  ground.addImage ("ground1", groundimage);
  ground.x = ground.width /2;
  
  invisibleground = createSprite(200,195,400,10);
  invisibleground.visible = false;
  
  cloudsgroup = new Group();
  obstaclesgroup = new Group();
  
}

function draw() {
  background(180);
  
  //trex.collide(invisibleground);
  
//jump when the space key is pressed
  if(keyDown("space") && trex.y >= 100)
   {
    trex.velocityY = -10 ;
    //playSound("jump.mp3",false);
   }
 //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  ground.velocityX = -2;
  if (ground.x < 0)
    {
     ground.x = ground.width/2;
    }
  
  spawnClouds();
  spawnObstacles();
  drawSprites();
}


function spawnClouds() {

if (World.frameCount%60 === 0)
  {
  //rand = Math.round(random(80,120));
  var cloud = createSprite(600,120,10,10);
  cloud.y = Math.round(random(80,120));
  console.log(rand);
  cloud.addImage ("clouds",cloudimage);
  cloud.scale = 0.7;
  cloud.velocityX = -5;
  trex.depth = cloud.depth +  1;
  cloud.lifetime = 150;
  cloudsgroup.add(cloud);
  }
}

function spawnObstacles() {
  if (World.frameCount%60 === 0)
  {
  rand = Math.round (random (1,6));
  var obstacle = createSprite(600,170,10,10);
  switch (rand)
  {
  case 1: obstacle.addImage("obstacle1", obstacleimage1);
  break;
  case 2: obstacle.addImage("obstacle2", obstacleimage2);
  break;
  case 3: obstacle.addImage("obstacle3", obstacleimage3);
  break;
  case 4: obstacle.addImage("obstacle4", obstacleimage4);
  break;
  case 5: obstacle.addImage("obstacle5", obstacleimage5);
  break;
  case 6: obstacle.addImage("obstacle6", obstacleimage6);
  break;
  } 
  obstacle.scale = 0.5;
  obstacle.velocityX = -10;
  obstacle.lifetime = 150;
  obstaclesgroup.add(obstacle);
  }
  
}




