var garden,rabbit;
var gardenImg,rabbitImg;
var redleaf, redImg, orangeleaf, orangeImg, apple, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
 
}

function setup(){
  
  createCanvas(400,400);
  
 // Sprites
 garden=createSprite (200,200);
 garden.addImage ("garden", gardenImg);
 rabbit = createSprite (180,340,30,30);
 rabbit.scale = 0.09;
 rabbit.addImage ("rabitt", rabbitImg);

}


function draw() {
  background(0);
 
 //faz o coelho se mover
  rabbit.x = World.mouseX;
  
  //faz o coelho bater nas bordas
  edges= createEdgeSprites();
  rabbit.collide(edges);

 var select_sprites = Math.round(random(1, 3));

 if(frameCount % 80 == 0){
   if(select_sprites == 1){
      createapples()
   }
     else if(select_sprites == 2){
     createredleafs();
   }else{
      craeteorangeleafs()
   }
 }
 
  drawSprites();
}


function createapples(){
 apple = createSprite (random(50, 350), 15, 20, 20);
 apple.addImage ("apple", appleImg);
 apple.scale = 0.07;
 apple.velocityY = 3;
 apple.lifetime = 150;
}

function createredleafs(){
  redleaf = createSprite (random(50, 350), 15, 20, 20); 
  redleaf.addImage ("leaf", redImg);
  redleaf.scale = 0.1;
  redleaf.velocityY = 3;
  redleaf.lifetime = 150;
}

function craeteorangeleafs(){
  orangeleaf = createSprite (random(50, 350), 15, 20, 20);
  orangeleaf.addImage ("leaf2", orangeImg);
  orangeleaf.scale = 0.10
  orangeleaf.velocityY = 3;
  orangeleaf.lifetime = 150;
}





