//Global Variables
var bananagroup,bananaimage;
var obstaclegroup,obstacleimage;

var backdrop, backdrop_img;
var monkey,monkey_running;
var ground;

var gameover;
var score = 0;

function preload(){
  backdrop = loadImage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage = loadImage("Banana.png");
  obstacleimage = loadImage("stone.png");
}

function setup() {
  createCanvas(600,300);
  monkey = createSprite(100,210,10,10);
  monkey_running.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -5;
  ground.x = ground.width/2;
  ground.visible = false;
  
  backdrop = createSprite(0,0,800,400);
  backdrop.addImage(backdrop_img);
  backdrop.scale = 1.5;
  backdrop.velocityX = -5;
  backdrop.x = backdrop.width/2;
  
  bananagroup = new Group();
  obstaclegroup = new Group();
}

function draw(){
 background(255); 
  if(backdrop.x === 0) {
   backdrop.x = backdrop.width/2 
  }
  if(ground.x === 0) {
ground.x = ground.width/2
  }
  
  if(keyDown(space)) {
   monkey.velocityY = -10; 
  }
  
  monkey.veloicityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  
  if(bananagroup.isTouching(monkey)) {
  bananagroup.destroyEach();
  score = score+1;
  }
  if(obstaclegroup.isTouching(monkey)) {
  monkey.scale = monkey.scale-0.2;
  }
  spawnBanana();
  spawnobstacle();
}

function spawnbanana() {
  if(world.frameCount%90===0) {
   var banana = createSprite(600,100,10,10);
    banana.addImage(bananaimage);
    banana.scale = 0.4;
    banana.y = random(100,150);
    banana.velocityX = -5;
    bananagroup.add(banana);
  }
}

function spawnobstacle() {
 if(world.frameCount%300===0) {
  var obstacle = createSprite(600,20,10,10);
    obstacle.addImage(bananaimage);
    obstacle.scale = 0.5
    obstacle.velocityX = -5;
    obstaclegroup.add(obstacle); 
}
}