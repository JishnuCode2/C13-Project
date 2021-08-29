//creating the variables
var garden,rabbit,apples,leaves,leaves2,leaves3,apples2,apples3;
var gardenImg,rabbitImg,appleImg,leafImg,leafImg2,leafImg3;
var select_sprites;



function preload(){      
//loading the images
      gardenImg = loadImage("garden.png");
      rabbitImg = loadImage("rabbit.png");
      appleImg = loadImage("apple.png");
      leafImg = loadImage("leaf.png");
      leafImg2 = loadImage("orangeLeaf.png");
      leafImg3 = loadImage("redImage.png");
}


function setup(){
//making the canvas 
      createCanvas(400,400);
      

// Moving background
      garden = createSprite(200, 200);
      garden.addImage("garden", gardenImg);


//creating rabbit 
     rabbit = createSprite(180,340,30,30);
     rabbit.scale =0.09;
     rabbit.addImage(rabbitImg);

}


function draw() {
//setting the background colour
      background(0);


//making the rabbit collide with the edges
      edges= createEdgeSprites();
      rabbit.collide(edges);


//assigning the X-position of the rabbit to the X-position of the mouse
      rabbit.x = World.mouseX;


//generating apples or leaves randomly
     if (frameCount%80 === 0){
      select_sprites = Math.round(random(1, 2))
      if (select_sprites == 1){
         createApples();
         }else{
          createLeaves();
      }
  } 


//drawing the sprites
     drawSprites();

}











function createApples(){

    apples = createSprite(random(50,150),40,10,10);
    apples.addImage("apples",appleImg);
    apples.velocityY = 4;
    apples.scale = 0.06;
    apples.depth = rabbit.depth-1;
    apples.lifetime = 70;


    apples2 = createSprite(random(170, 250),20,10,10);
    apples2.addImage("apples2",appleImg);
    apples2.velocityY = 4;
    apples2.scale = 0.06;
    apples2.depth = rabbit.depth-1;
    apples2.lifetime = 70;


    apples3 = createSprite(random(260, 360 ),0,10,10);
    apples3.addImage("apples3",appleImg);
    apples3.velocityY = 4;
    apples3.scale = 0.06;
    apples3.depth = rabbit.depth-1;
    apples3.lifetime = 70;

}

function createLeaves(){

    leaves = createSprite(random(10,330),10,10,10);
    leaves.addImage("leaves",leafImg);
    leaves.velocityY = 4;
    leaves.scale = 0.10;
    leaves.depth = rabbit.depth-1;
    leaves.lifetime = 80;


    leaves2 = createSprite(random(10,330),10,10,10);
    leaves2.addImage("redLeaves",leafImg2);
    leaves2.velocityY = 4;
    leaves2.scale = 0.10;
    leaves2.depth = rabbit.depth-1;
    leaves2.lifetime = 80;

    
    leaves3 = createSprite(random(10,330),10,10,10);
    leaves3.addImage("leaf",leafImg3);
    leaves3.velocityY = 4;
    leaves3.scale = 0.10;
    leaves3.depth = rabbit.depth-1;
    leaves3.lifetime = 80;
}