
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Constraint

function preload()
{
	polygon_img=loadImage("polygon.png")

}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	sling=new Slingshot(this.polygon,{x:100,y:200});

	ground=new Ground(500,height,1000,20)
	platform1=new Ground(450,300,300,10)
	platform2=new Ground(800,175,200,10)
	box1=new Box(324,250,40,50)
	box2=new Box(374,250,40,50)
	box3=new Box(424,250,40,50)
	box4=new Box(474,250,40,50)
	box5=new Box(524,250,40,50)
	box6=new Box(574,250,40,50)

	box7=new Box(345,190,40,50)
	box8=new Box(395,190,40,50)
	box9=new Box(445,190,40,50)
	box10=new Box(495,190,40,50)
	box11=new Box(545,190,40,50)

	box12=new Box(369,130,40,50)
	box13=new Box(419,130,40,50)
	box14=new Box(469,130,40,50)
	box15=new Box(519,130,40,50)

	box16=new Box(390,70,40,50)
	box17=new Box(440,70,40,50)
	box18=new Box(490,70,40,50)

	box19=new Box(420,10,40,50)
	box20=new Box(470,10,40,50)

	box21=new Box(800,150,40,50)
	box22=new Box(850,150,40,50)
	box23=new Box(750,150,40,50)

	box24=new Box(775,100,40,50)
	box25=new Box(825,100,40,50)

	box26=new Box(800,50,40,50)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  platform1.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();

  box26.display();

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  
 
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	sling.fly();
	//keycode++
}



