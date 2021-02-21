
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject

function preload()
{
dustbin1=loadImage("dustbin.png")	
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(150,365);
	ground1=new Ground(600,370,1200,20);
	log1=new Log(770,304,20,115);
	log2=new Log(890,305,20,115);
  log3=new Log(width/2+230,350,150,25);
  dustbin=createSprite(830,270,350,350);
  dustbin.addImage(dustbin1);
  dustbin.scale=0.6;
  
	

	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  text(mouseX+","+ mouseY,mouseX,mouseY);
  
  
  
  paper1.display();
  ground1.display();
  log1.display();
  log2.display();
  log3.display();
  
  

  


  
  drawSprites();
  

 
}
function  keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:72,y:-72});
}
}



