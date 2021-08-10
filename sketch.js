var road, roadImg;
var boy, boyImg;
var cash, cashImg, diamonds, diamondImg, jwell, jwellImg;
var cashGroup
var diamondGroup
var jwellGroup
function preload () {
roadImg = loadImage("Road.png");
boyImg =  loadAnimation("Runner-1.png","Runner-2.png");
cashImg = loadImage("cash.png");
diamondImg = loadImage("diamonds.png");
jwellImg = loadImage ("jwell.png")
}
function setup () {
createCanvas(400,600);
road = createSprite (200,200);
road.addImage (roadImg);
road.velocityY = 4;

boy = createSprite(70,500,20,20);
boy.addAnimation("run",boyImg);
boy.scale = 0.1;
cashGroup = new Group ()
diamondGroup = new Group()
jwellGroup = new Group()
}
function draw() {
background ("blue");
if(road.y>400){
road.y = height/2
}

spawnCash()
boy.x = mouseX

if(cashGroup.isTouching(boy)){
cashGroup.destroyEach()
}

spawndiamond()


if(diamondGroup.isTouching){
diamondGroup.destroyEach()
}

jwell()


if(jwellGroup.isTouching){
jwellGroup.destroyEach()
}

drawSprites();
}

function spawnCash(){
if (frameCount % 120 === 0){
var cash = createSprite (200,10,50,50)
cash.x = Math.round(random(60,350))
cash.addImage(cashImg);
cash.scale = 0.1;
cash.velocityY = 5
cashGroup.add(cash)
}

}

function spawndiamond() {
if  (frameCount % 20 === 0){
var diamond = createSprite (200,10,50,50)
diamond.x = Math.round(random(60,350))
diamond.addImage(diamondImg);
diamond.scale = 0.1;
diamond.velocityY = 5
diamondGroup.add(diamond)
}

}

function jwell() {
if  (frameCount % 120 === 0){
var jwell = createSprite (200,10,50,50)
jwell.x = Math.round(random(60,350))
jwell.addImage(jwellImg);
//jwell.scale = 0.1;
jwell.velocityY = 5
jwellGroup.add(jwell)
}

}