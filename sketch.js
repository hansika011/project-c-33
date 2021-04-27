const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload (){
  bg=loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    snow1=new Snow ()
}

function draw() {
  background(bg);
  drawSprites();
  snow1.display()
}
