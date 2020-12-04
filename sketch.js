
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var paperObj,block1,block2,block3;
var ground



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paperObj=new paper(300,300,40);
	ground=new Ground(800,485,200,20);
	block1=new Box(1200,470,180,20);
	block2=new Box(110,430,20,100);
	block3=new Box(1300,420,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  paperobj.display();
  Fill("white");
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);  
 
}
function keyPressed(){

	

	if(keyCode === UP_ARROW ){ 
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85}); }
   
	}
   
   


