
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

var holder_options={
    isStatic: true
  }

  holder = Bodies.rectangle(400,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(420,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 50
}
var string = Constraint.create(options);
World.add(world,string);

fill("white");
}


function draw() {
  background("red"); 
  Engine.update(engine);


  text("To oscillate the pendulam to left and right press the respective arrow keys",10,20);
  text("Press space  to stop the Pendulum",100,50);

  fill ("black");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);


fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(5);
stroke("white");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




if(keyCode===37){
  ball.position.x = ball.position.x-0.5;
ball.position.y = ball.position.y+0.1;

}
if(keyCode===39){
  ball.position.x = ball.position.x+0.5;
  ball.position.y = ball.position.y+0.1

}

else if (keyCode === 32){
ball.position.x = 200;

}

}








