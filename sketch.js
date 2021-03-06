const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var object, objectImg;

function preload() {
objectImg = loadImage("Image.png");
}

function setup() {
  createCanvas(900,500);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  object = Bodies.circle(50,250,20);
  World.add(world,object);

  ground1 = new Ground(350,455,175,15);
  boxB11 = new BoxB(350,425,35,35);
  boxB12 = new BoxB(315,425,35,35);
  boxB13 = new BoxB(385,425,35,35);
  boxB14 = new BoxB(280,425,35,35);
  boxB15 = new BoxB(420,425,35,35);
  boxO11 = new BoxO(350,390,35,35);
  boxO12 = new BoxO(315,390,35,35);
  boxO13 = new BoxO(385,390,35,35);
  boxY11 = new BoxY(350,355,35,35);

  ground2 = new Ground(750,255,175,15);
  boxB21 = new BoxB(750,225,35,35);
  boxB22 = new BoxB(715,225,35,35);
  boxB23 = new BoxB(785,225,35,35);
  boxB24 = new BoxB(680,225,35,35);
  boxB25 = new BoxB(820,225,35,35);
  boxO21 = new BoxO(750,190,35,35);
  boxO22 = new BoxO(715,190,35,35);
  boxO23 = new BoxO(785,190,35,35);
  boxY21 = new BoxY(750,155,35,35);

  sling = new Slingshot(object,{x:100,y:150});

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();

  imageMode(CENTER);
  image(objectImg ,object.position.x,object.position.y,40,40)

  ground1.display();
  boxB11.display();
  boxB12.display();
  boxB13.display();
  boxB14.display();
  boxB15.display();
  boxO11.display();
  boxO12.display();
  boxO13.display();
  boxY11.display();

  ground2.display();
  boxB21.display();
  boxB22.display();
  boxB23.display();
  boxB24.display();
  boxB25.display();
  boxO21.display();
  boxO22.display();
  boxO23.display();
  boxY21.display();

  
  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(object,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
   if (keyCode === 32) { 
     sling.reload(object);
     } 
    }