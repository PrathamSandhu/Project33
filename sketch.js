function setup() {
  createCanvas(windowWidth,windowHeight);
}

function preload(){
  bgImg = loadImage("snow2.jpg");
  snowflakeImg = loadImage("snow4.webp");
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,windowWidth), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}