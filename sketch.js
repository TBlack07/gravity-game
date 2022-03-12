const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground1,ground2,ground3,ground4,ball,b1,b2


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground1=new Ground(200,380,400,15)
  ground2=new Ground(200,20,400,15)
  ground3=new Ground(20,200,15,400)
  ground4=new Ground(380,200,15,400)

var balloptions={
  restitution:1.0
}

  ball=Bodies.circle(200,200,20,balloptions)
  World.add(world,ball)

b1=createImg("push.png")
b1.size(20,20)
b1.position(50,50)
b1.mouseClicked(vForce)

b2=createImg("push.png")
b2.size(20,20)
b2.position(50,250)
b2.mouseClicked(hForce)


}



function draw() 
{
  background(51);
  Engine.update(engine);
ground1.display()
ground2.display()
ground3.display()
ground4.display()
ellipse(ball.position.x,ball.position.y,20,20)

}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}