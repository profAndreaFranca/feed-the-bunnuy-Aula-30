const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var link;

var bg_img;
var food;
var rabbit;

var button;
var bunny;

function preload()
{
  bg_img = loadImage('./assets/background.png');
  food = loadImage('./assets/melon.png');
  rabbit = loadImage('./assets/Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  //btn 1
  button = createImg('./assets/cut_btn.png');
  button.position(200,30);
  button.size(50,50);
  button.mouseClicked(drop);

  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);
  bunny = createSprite(200,620,100,100);
  bunny.addImage(rabbit);
  bunny.scale = 0.2;

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  link = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();

  Engine.update(engine);
  ground.show();
  drawSprites();
   
}

function drop()
{
  rope.break();
  link.detach();
  link = null; 
}





