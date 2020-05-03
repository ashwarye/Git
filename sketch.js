// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;*/
 
var engine;
var world;
var box;
var ground;
var tanker1, tanker2, tanker3;
var ball;
var shootball;

function setup() {
// Setup the canvas, the ground, tanker, the shooting ball and the bubble balls.
engine = Engine.create();

world =  engine.world;
createCanvas(800,400);
ground = new Ground(375,50,750,100);
tanker1 = new Tanker(75, 60, 50, 20);
tanker2 = new Tanker(75, 80, 50, 20 );
tanker3 = new Tanker(75, 115, 50, 50);
shootball = new ShootBall(100, 115, 50, 20, PI/7);
ball = new Ball(140, 150, 20);
}

function draw() {
// Remember to update the Matter Engine and set the background.
  background(0, 0, 0);
  Engine.update(engine);
  ground.display();
  tanker1.display();
  tanker2.display();
  tanker3.display();
  shootball.display();
  ball.display();
  drawSprites();
}


function keyReleased() {
    // Call the shoot method for the cannon.  
}