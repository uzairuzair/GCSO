var car, wall ,speed,weight;

function setup() {
  createCanvas(1600,800);
  wall = createSprite(1500, 20, 60, height/2);
  wall.shapeColor = "green";
  wall.debug = true;
  car = createSprite(50, 200,50,50);
  car.shapeColor = "green";
  car.debug = true;

  car.velocityY = speed;
  wall.velocityY = 0;
  speed=random(55,96)
  weight=random(400,1500)
}

function draw() {
  background(0,0,0);  
bounce(car,wall);
if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityx=0;
  var deformation=0.5* weight * speed * speed/22509;
  if(deformation>180)
{
  car.shapecolor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapecolor=color(230,230,0);

}
if(deformation<100)
{
  car.shapecolor=color(0,250,0)
}
}
 
  drawSprites();
}
