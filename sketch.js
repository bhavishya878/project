
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var object;


function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var ground_options={
	isStatic:true
}
	
ground=Bodies.rectangle(200,100,50,50,ground_options);
World.add(World,ground);

var ball_options={
	restitution:1.0
}

ball=Bodies.rectangle(200,100,50,50,ball_options);
world.add(World,ball);

	

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  engine.ubdate(engine);
  rect(object.position.x.object.position.y,400,50);
  rect(ball.position.x.object.position.y,20,20);
  
  drawSprites();
 
}



