const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var billfrontImage,billbackImage,billleftImage,billrightImage;
var default_bill;
var bill;
var bgimage;
var edges;
var watchtower,watchtowerImage;
var life = 100;
var wave = 0;
var coin, coinvalue = 200;
var coinimage;
var PLAY = 1;
var GAMEOVER = 2;
var WIN = 3;
var gameState = PLAY;
var ybullet1,ybullet2,ybullet3,ybullet4;
var bbullet1,bbullet2,bbullet3,bbullet4;
var destroyedRobos = 0;
//var bgsound;

function preload()
{
	bgimage = loadImage("images/bg.jpg");
	default_bill = loadAnimation("images/defaultbill.png");
	watchtowerImage= loadImage("images/watchtower.png");
	billback_Image = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png");
	billleft_Image = loadAnimation("images/10.png","images/11.png","images/12.png","images/13.png","images/14.png","images/15.png","images/16.png","images/17.png","images/18.png");
	billfront_Image = loadAnimation("images/19.png","images/20.png","images/21.png","images/22.png","images/23.png","images/24.png","images/25.png","images/26.png","images/27.png");
	billright_Image = loadAnimation("images/28.png","images/29.png","images/30.png","images/31.png","images/32.png","images/33.png","images/34.png","images/35.png","images/36.png");
	coinimage = loadImage("images/coin.png");
	redroboimage = loadImage("images/redrobo.jpg");
	blueroboimage = loadImage("images/bluerobo.jpg");
	yellowroboimage = loadImage("images/yellowrobo.jpg");
	quadraShotimage = loadImage("images/quadrashot.png");
	ybullet = loadImage("images/yellowbullet.png");
	allShotimage = loadImage("images/allshot.png");
	bbullet = loadImage("images/bluebullet.png");
	restartImage = loadImage("images/restart.png");
	//bgsound = loadSound("sounds/bgMusic.mp3");
}

function setup() {
	createCanvas(900,500); 

	edges = createEdgeSprites();

	treecollider1 = createSprite(10,310,80,620);
	treecollider1.visible = false;
	treecollider2 = createSprite(845,310,25,620);
	treecollider2.visible = false;

	firstcollider = createSprite(200,350,15,15);
	firstcollider.visible = false;

	secondcollider = createSprite(180,480,15,15);
	secondcollider.visible = false;

	thirdcollider = createSprite(340,464,15,15);
	thirdcollider.visible = false;

	fourthcollider = createSprite(320,215,15,15);
	fourthcollider.visible = false;

	fifthcollider = createSprite(195,240,15,15);
	fifthcollider.visible = false;

	sixthcollider = createSprite(195,40.5,15,15);
	sixthcollider.visible = false;

	seventhcollider = createSprite(720,75,15,15);
	seventhcollider.visible = false;

	eighthcollider = createSprite(690,285,15,20);
	eighthcollider.visible = false;

	ninethcollider = createSprite(790,245,15,15);
	ninethcollider.visible = false;

	tenthcollider = createSprite(770,390,15,15);
	tenthcollider.visible = false;

	eleventhcollider = createSprite(525,375,15,15);
	eleventhcollider.visible = false;

	watchtower = createSprite(545,465,20,20);
	watchtower.addImage(watchtowerImage);
	watchtower.scale = 0.425;
	watchtower.setCollider("rectangle",watchtower.length, watchtower.heigth)
		
	bill = createSprite(300,180);
	bill.scale = 1.25;
	
	bill.addAnimation("default",default_bill);
	bill.addAnimation("default1",billback_Image);
	bill.addAnimation("default2",billleft_Image);
	bill.addAnimation("default3",billfront_Image);
	bill.addAnimation("default4",billright_Image);

	redRobo1 = createSprite(130,350,25,25,3);
	redRobo1.addImage(redroboimage);
	redRobo1.velocityX = 2.5;
	redRobo1.scale = 0.90;

	redRobo2 = createSprite(80,350,25,25,3);
	redRobo2.addImage(redroboimage);
	redRobo2.velocityX = 2.7;
	redRobo2.scale = 0.90;

	redRobo3 = createSprite(30,350,25,25,3);
	redRobo3.addImage(redroboimage);
	redRobo3.velocityX = 2.5;
	redRobo3.scale = 0.90;

	redRobo4 = createSprite(-30,350,25,25,3);
	redRobo4.addImage(redroboimage);
	redRobo4.velocityX = 2.5;
	redRobo4.scale = 0.90;

	redRobo5 = createSprite(-80,350,25,25,3);
	redRobo5.addImage(redroboimage);
	redRobo5.velocityX = 2.5;
	redRobo5.scale = 0.90;

	blueRobo1 = createSprite(-2500,350,25,25,3);
	blueRobo1.addImage(blueroboimage);
	blueRobo1.velocityX = 3.5;
	blueRobo1.scale = 0.90;

	blueRobo2 = createSprite(-2550,350,25,25,3);
	blueRobo2.addImage(blueroboimage);
	blueRobo2.velocityX = 3.5;
	blueRobo2.scale = 0.90;

	blueRobo3 = createSprite(-2600,350,25,25,3);
	blueRobo3.addImage(blueroboimage);
	blueRobo3.velocityX = 3.5;
	blueRobo3.scale = 0.90;

	blueRobo4 = createSprite(-2650,350,25,25,3);
	blueRobo4.addImage(blueroboimage);
	blueRobo4.velocityX = 3.5;
	blueRobo4.scale = 0.90;

	blueRobo5 = createSprite(-2700,350,25,25,3);
	blueRobo5.addImage(blueroboimage);
	blueRobo5.velocityX = 3.5;
	blueRobo5.scale = 0.90;

	blueRobo6 = createSprite(-2750,350,25,25,3);
	blueRobo6.addImage(blueroboimage);
	blueRobo6.velocityX = 3.5;
	blueRobo6.scale = 0.90;

	blueRobo7 = createSprite(-2800,350,25,25,3);
	blueRobo7.addImage(blueroboimage);
	blueRobo7.velocityX = 3.5;
	blueRobo7.scale = 0.90;

	yellowRobo1 = createSprite(-5500,350,25,25,3);
	yellowRobo1.addImage(yellowroboimage);
	yellowRobo1.velocityX = 5;
	yellowRobo1.scale = 0.90;

	yellowRobo2 = createSprite(-5550,350,25,25,3);
	yellowRobo2.addImage(yellowroboimage);
	yellowRobo2.velocityX = 5;
	yellowRobo2.scale = 0.90;

	yellowRobo3= createSprite(-5600,350,25,25,3);
	yellowRobo3.addImage(yellowroboimage);
	yellowRobo3.velocityX = 5;
	yellowRobo3.scale = 0.90;

	yellowRobo4= createSprite(-5650,350,25,25,3);
	yellowRobo4.addImage(yellowroboimage);
	yellowRobo4.velocityX = 5;
	yellowRobo4.scale = 0.90;

	yellowRobo5 = createSprite(-5700,350,25,25,3);
	yellowRobo5.addImage(yellowroboimage);
	yellowRobo5.velocityX = 5;
	yellowRobo5.scale = 0.90;

	yellowRobo6 = createSprite(-5750,350,25,25,3);
	yellowRobo6.addImage(yellowroboimage);
	yellowRobo6.velocityX = 5;
	yellowRobo6.scale = 0.90;

	yellowRobo7 = createSprite(-5800,350,25,25,3);
	yellowRobo7.addImage(yellowroboimage);
	yellowRobo7.velocityX = 5;
	yellowRobo7.scale = 0.90;

	yellowRobo8 = createSprite(-5850,350,25,25,3);
	yellowRobo8.addImage(yellowroboimage);
	yellowRobo8.velocityX = 5;
	yellowRobo8.scale = 0.90;

	yellowRobo9 = createSprite(-5900,350,25,25,3);
	yellowRobo9.addImage(yellowroboimage);
	yellowRobo9.velocityX = 5;
	yellowRobo9.scale = 0.90;

	yellowRobo10 = createSprite(-5950,350,25,25,3);
	yellowRobo10.addImage(yellowroboimage);
	yellowRobo10.velocityX = 5;
	yellowRobo10.scale = 0.90;

	yellowRobo11 = createSprite(-6000,350,25,25,3);
	yellowRobo11.addImage(yellowroboimage);
	yellowRobo11.velocityX = 5;
	yellowRobo11.scale = 0.90;

	quadraShot1 = createSprite(450,150,30,10);
	quadraShot1.addImage(quadraShotimage);

	allShot1 = createSprite(450,300,30,10);
	allShot1.addImage(allShotimage);

	quadraShot2 = createSprite(700,450,30,10);
	quadraShot2.addImage(quadraShotimage);

	allShot3 = createSprite(775,175,30,10);
	allShot3.addImage(allShotimage);

	allShot2 = createSprite(225,275,30,10);
	allShot2.addImage(allShotimage);

	restartButton = createSprite(415,375,20,20);
	restartButton.visible = false;

	yellowbullet1Group = new Group();
	bluebullet1Group = new Group();
	yellowbullet2Group = new Group();
	bluebullet2Group = new Group();
	bluebullet3Group = new Group();

	

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

}


function draw() {
  background(bgimage);

  //bgsound.play(true);
	if(gameState===PLAY){


		textFont("MineCrafter");
		textSize(25);
		fill("white");
		strokeWeight(2);
		stroke("black");
		text("ROUND : 1",450,25);

  	if(keyDown("UP")){
	  bill.changeAnimation("default1",billback_Image);
	  bill.y = bill.y-6;
  }

   	if(keyDown("DOWN")){
	bill.changeAnimation("default3",billfront_Image);
	bill.y = bill.y+6;
}

 	if(keyDown("LEFT")){
	bill.changeAnimation("default2",billleft_Image);
	bill.x = bill.x-6;
}

	if(keyDown("RIGHT")){
	bill.changeAnimation("default4",billright_Image);
	bill.x = bill.x+6;
}

if(redRobo1.isTouching(firstcollider)){
	redRobo1.velocityX = 0;
	redRobo1.velocityY = 2.5;
}

if(redRobo1.isTouching(secondcollider)){
	redRobo1.velocityY = 0;
	redRobo1.velocityX = 2.5;
}

if(redRobo1.isTouching(thirdcollider)){
	redRobo1.velocityX = 0;
	redRobo1.velocityY = -2.5;
}

if(redRobo1.isTouching(fourthcollider)){
	redRobo1.velocityX = -2.5;
	redRobo1.velocityY = 0;
}

if(redRobo1.isTouching(fifthcollider)){
	redRobo1.velocityX = 0;
	redRobo1.velocityY = -2.5;
}

if(redRobo1.isTouching(sixthcollider)){
	redRobo1.velocityX = 2.5;
	redRobo1.velocityY = 0;
}

if(redRobo1.isTouching(seventhcollider)){
	redRobo1.velocityX = 0;
	redRobo1.velocityY = 2.5;
}

if(redRobo1.isTouching(eighthcollider)){
	redRobo1.velocityX = 2.5;
	redRobo1.velocityY = 0;
}

if(redRobo1.isTouching(ninethcollider)){
	redRobo1.velocityX = 0;
	redRobo1.velocityY = 2.5;
}

if(redRobo1.isTouching(tenthcollider)){
	redRobo1.velocityX = -2.5;
	redRobo1.velocityY = 0;
}

if(redRobo1.isTouching(eleventhcollider)){
	redRobo1.velocityX = 0;
	redRobo1.velocityY = 2.5;
}

if(redRobo2.isTouching(firstcollider)){
	redRobo2.velocityX = 0;
	redRobo2.velocityY = 2.5;
}

if(redRobo2.isTouching(secondcollider)){
	redRobo2.velocityY = 0;
	redRobo2.velocityX = 2.5;
}

if(redRobo2.isTouching(thirdcollider)){
	redRobo2.velocityX = 0;
	redRobo2.velocityY = -2.5;
}

if(redRobo2.isTouching(fourthcollider)){
	redRobo2.velocityX = -2.5;
	redRobo2.velocityY = 0;
}

if(redRobo2.isTouching(fifthcollider)){
	redRobo2.velocityX = 0;
	redRobo2.velocityY = -2.5;
}

if(redRobo2.isTouching(sixthcollider)){
	redRobo2.velocityX = 2.5;
	redRobo2.velocityY = 0;
}

if(redRobo2.isTouching(seventhcollider)){
	redRobo2.velocityX = 0;
	redRobo2.velocityY = 2.5;
}

if(redRobo2.isTouching(eighthcollider)){
	redRobo2.velocityX = 2.5;
	redRobo2.velocityY = 0;
}

if(redRobo2.isTouching(ninethcollider)){
	redRobo2.velocityX = 0;
	redRobo2.velocityY = 2.5;
}

if(redRobo2.isTouching(tenthcollider)){
	redRobo2.velocityX = -2.5;
	redRobo2.velocityY = 0;
}

if(redRobo2.isTouching(eleventhcollider)){
	redRobo2.velocityX = 0;
	redRobo2.velocityY = 2.5;
}

if(redRobo3.isTouching(firstcollider)){
	redRobo3.velocityX = 0;
	redRobo3.velocityY = 2.5;
}

if(redRobo3.isTouching(secondcollider)){
	redRobo3.velocityY = 0;
	redRobo3.velocityX = 2.5;
}

if(redRobo3.isTouching(thirdcollider)){
	redRobo3.velocityX = 0;
	redRobo3.velocityY = -2.5;
}

if(redRobo3.isTouching(fourthcollider)){
	redRobo3.velocityX = -2.5;
	redRobo3.velocityY = 0;
}

if(redRobo3.isTouching(fifthcollider)){
	redRobo3.velocityX = 0;
	redRobo3.velocityY = -2.5;
}

if(redRobo3.isTouching(sixthcollider)){
	redRobo3.velocityX = 2.5;
	redRobo3.velocityY = 0;
}

if(redRobo3.isTouching(seventhcollider)){
	redRobo3.velocityX = 0;
	redRobo3.velocityY = 2.5;
}

if(redRobo3.isTouching(eighthcollider)){
	redRobo3.velocityX = 2.5;
	redRobo3.velocityY = 0;
}

if(redRobo3.isTouching(ninethcollider)){
	redRobo3.velocityX = 0;
	redRobo3.velocityY = 2.5;
}

if(redRobo3.isTouching(tenthcollider)){
	redRobo3.velocityX = -2.5;
	redRobo3.velocityY = 0;
}

if(redRobo3.isTouching(eleventhcollider)){
	redRobo3.velocityX = 0;
	redRobo3.velocityY = 2.5;
}

if(redRobo4.isTouching(firstcollider)){
	redRobo4.velocityX = 0;
	redRobo4.velocityY = 2.5;
}

if(redRobo4.isTouching(secondcollider)){
	redRobo4.velocityY = 0;
	redRobo4.velocityX = 2.5;
}

if(redRobo4.isTouching(thirdcollider)){
	redRobo4.velocityX = 0;
	redRobo4.velocityY = -2.5;
}

if(redRobo4.isTouching(fourthcollider)){
	redRobo4.velocityX = -2.5;
	redRobo4.velocityY = 0;
}

if(redRobo4.isTouching(fifthcollider)){
	redRobo4.velocityX = 0;
	redRobo4.velocityY = -2.5;
}

if(redRobo4.isTouching(sixthcollider)){
	redRobo4.velocityX = 2.5;
	redRobo4.velocityY = 0;
}

if(redRobo4.isTouching(seventhcollider)){
	redRobo4.velocityX = 0;
	redRobo4.velocityY = 2.5;
}

if(redRobo4.isTouching(eighthcollider)){
	redRobo4.velocityX = 2.5;
	redRobo4.velocityY = 0;
}

if(redRobo4.isTouching(ninethcollider)){
	redRobo4.velocityX = 0;
	redRobo4.velocityY = 2.5;
}

if(redRobo4.isTouching(tenthcollider)){
	redRobo4.velocityX = -2.5;
	redRobo4.velocityY = 0;
}

if(redRobo4.isTouching(eleventhcollider)){
	redRobo4.velocityX = 0;
	redRobo4.velocityY = 2.5;
}

if(redRobo5.isTouching(firstcollider)){
	redRobo5.velocityX = 0;
	redRobo5.velocityY = 2.5;
}

if(redRobo5.isTouching(secondcollider)){
	redRobo5.velocityY = 0;
	redRobo5.velocityX = 2.5;
}

if(redRobo5.isTouching(thirdcollider)){
	redRobo5.velocityX = 0;
	redRobo5.velocityY = -2.5;
}

if(redRobo5.isTouching(fourthcollider)){
	redRobo5.velocityX = -2.5;
	redRobo5.velocityY = 0;
}

if(redRobo5.isTouching(fifthcollider)){
	redRobo5.velocityX = 0;
	redRobo5.velocityY = -2.5;
}

if(redRobo5.isTouching(sixthcollider)){
	redRobo5.velocityX = 2.5;
	redRobo5.velocityY = 0;
}

if(redRobo5.isTouching(seventhcollider)){
	redRobo5.velocityX = 0;
	redRobo5.velocityY = 2.5;
}

if(redRobo5.isTouching(eighthcollider)){
	redRobo5.velocityX = 2.5;
	redRobo5.velocityY = 0; 
}

if(redRobo5.isTouching(ninethcollider)){
	redRobo5.velocityX = 0;
	redRobo5.velocityY = 2.5;
}

if(redRobo5.isTouching(tenthcollider)){
	redRobo5.velocityX = -2.5;
	redRobo5.velocityY = 0;
}

if(redRobo5.isTouching(eleventhcollider)){
	redRobo5.velocityX = 0;
	redRobo5.velocityY = 2.5;
}

if(blueRobo1.isTouching(firstcollider)){
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = 3.5;
}

if(blueRobo1.isTouching(secondcollider)){
	blueRobo1.velocityY = 0;
	blueRobo1.velocityX = 3.5;
}

if(blueRobo1.isTouching(thirdcollider)){
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = -3.5;
}

if(blueRobo1.isTouching(fourthcollider)){
	blueRobo1.velocityX = -3.5;
	blueRobo1.velocityY = 0;
}

if(blueRobo1.isTouching(fifthcollider)){
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = -3.5;
}

if(blueRobo1.isTouching(sixthcollider)){
	blueRobo1.velocityX = 3.5;
	blueRobo1.velocityY = 0;
}

if(blueRobo1.isTouching(seventhcollider)){
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = 3.5;
}

if(blueRobo1.isTouching(eighthcollider)){
	blueRobo1.velocityX = 3.5;
	blueRobo1.velocityY = 0; 
}

if(blueRobo1.isTouching(ninethcollider)){
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = 3.5;
}

if(blueRobo1.isTouching(tenthcollider)){
	blueRobo1.velocityX = -3.5;
	blueRobo1.velocityY = 0;
}

if(blueRobo1.isTouching(eleventhcollider)){
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = 3.5;
}

if(blueRobo2.isTouching(firstcollider)){
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = 3.5;
}

if(blueRobo2.isTouching(secondcollider)){
	blueRobo2.velocityY = 0;
	blueRobo2.velocityX = 3.5;
}

if(blueRobo2.isTouching(thirdcollider)){
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = -3.5;
}

if(blueRobo2.isTouching(fourthcollider)){
	blueRobo2.velocityX = -3.5;
	blueRobo2.velocityY = 0;
}

if(blueRobo2.isTouching(fifthcollider)){
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = -3.5;
}

if(blueRobo2.isTouching(sixthcollider)){
	blueRobo2.velocityX = 3.5;
	blueRobo2.velocityY = 0;
}

if(blueRobo2.isTouching(seventhcollider)){
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = 3.5;
}

if(blueRobo2.isTouching(eighthcollider)){
	blueRobo2.velocityX = 3.5;
	blueRobo2.velocityY = 0; 
}

if(blueRobo2.isTouching(ninethcollider)){
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = 3.5;
}

if(blueRobo2.isTouching(tenthcollider)){
	blueRobo2.velocityX = 3.5;
	blueRobo2.velocityY = 0;
}

if(blueRobo2.isTouching(eleventhcollider)){
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = 3.5;
}

if(blueRobo3.isTouching(firstcollider)){
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = 3.5;
}

if(blueRobo3.isTouching(secondcollider)){
	blueRobo3.velocityY = 0;
	blueRobo3.velocityX = 3.5;
}

if(blueRobo3.isTouching(thirdcollider)){
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = -3.5;
}

if(blueRobo3.isTouching(fourthcollider)){
	blueRobo3.velocityX = -3.5;
	blueRobo3.velocityY = 0;
}

if(blueRobo3.isTouching(fifthcollider)){
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = -3.5;
}

if(blueRobo3.isTouching(sixthcollider)){
	blueRobo3.velocityX = 3.5;
	blueRobo3.velocityY = 0;
}

if(blueRobo3.isTouching(seventhcollider)){
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = 3.5;
}

if(blueRobo3.isTouching(eighthcollider)){
	blueRobo3.velocityX = 3.5;
	blueRobo3.velocityY = 0; 
}

if(blueRobo3.isTouching(ninethcollider)){
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = 3.5;
}

if(blueRobo3.isTouching(tenthcollider)){
	blueRobo3.velocityX = -3.5;
	blueRobo3.velocityY = 0;
}

if(blueRobo3.isTouching(eleventhcollider)){
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = 3.5;
}

if(blueRobo4.isTouching(firstcollider)){
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = 3.5;
}

if(blueRobo4.isTouching(secondcollider)){
	blueRobo4.velocityY = 0;
	blueRobo4.velocityX = 3.5;
}

if(blueRobo4.isTouching(thirdcollider)){
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = -3.5;
}

if(blueRobo4.isTouching(fourthcollider)){
	blueRobo4.velocityX = -3.5;
	blueRobo4.velocityY = 0;
}

if(blueRobo4.isTouching(fifthcollider)){
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = -3.5;
}

if(blueRobo4.isTouching(sixthcollider)){
	blueRobo4.velocityX = 3.5;
	blueRobo4.velocityY = 0;
}

if(blueRobo4.isTouching(seventhcollider)){
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = 3.5;
}

if(blueRobo4.isTouching(eighthcollider)){
	blueRobo4.velocityX = 3.5;
	blueRobo4.velocityY = 0; 
}

if(blueRobo4.isTouching(ninethcollider)){
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = 3.5;
}

if(blueRobo4.isTouching(tenthcollider)){
	blueRobo4.velocityX = -3.5;
	blueRobo4.velocityY = 0;
}

if(blueRobo4.isTouching(eleventhcollider)){
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = 3.5;
}

if(blueRobo5.isTouching(firstcollider)){
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = 3.5;
}

if(blueRobo5.isTouching(secondcollider)){
	blueRobo5.velocityY = 0;
	blueRobo5.velocityX = 3.5;
}

if(blueRobo5.isTouching(thirdcollider)){
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = -3.5;
}

if(blueRobo5.isTouching(fourthcollider)){
	blueRobo5.velocityX = -3.5;
	blueRobo5.velocityY = 0;
}

if(blueRobo5.isTouching(fifthcollider)){
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = -3.5;
}

if(blueRobo5.isTouching(sixthcollider)){
	blueRobo5.velocityX = 3.5;
	blueRobo5.velocityY = 0;
}

if(blueRobo5.isTouching(seventhcollider)){
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = 3.5;
}

if(blueRobo5.isTouching(eighthcollider)){
	blueRobo5.velocityX = 3.5;
	blueRobo5.velocityY = 0; 
}

if(blueRobo5.isTouching(ninethcollider)){
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = 3.5;
}

if(blueRobo5.isTouching(tenthcollider)){
	blueRobo5.velocityX = -3.5;
	blueRobo5.velocityY = 0;
}

if(blueRobo5.isTouching(eleventhcollider)){
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = 3.5;
}

if(blueRobo6.isTouching(firstcollider)){
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = 3.5;
}

if(blueRobo6.isTouching(secondcollider)){
	blueRobo6.velocityY = 0;
	blueRobo6.velocityX = 3.5;
}

if(blueRobo6.isTouching(thirdcollider)){
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = -3.5;
}

if(blueRobo6.isTouching(fourthcollider)){
	blueRobo6.velocityX = -3.5;
	blueRobo6.velocityY = 0;
}

if(blueRobo6.isTouching(fifthcollider)){
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = -3.5;
}

if(blueRobo6.isTouching(sixthcollider)){
	blueRobo6.velocityX = 3.5;
	blueRobo6.velocityY = 0;
}

if(blueRobo6.isTouching(seventhcollider)){
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = 3.5;
}

if(blueRobo6.isTouching(eighthcollider)){
	blueRobo6.velocityX = 3.5;
	blueRobo6.velocityY = 0; 
}

if(blueRobo6.isTouching(ninethcollider)){
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = 3.5;
}

if(blueRobo6.isTouching(tenthcollider)){
	blueRobo6.velocityX = -3.5;
	blueRobo6.velocityY = 0;
}

if(blueRobo6.isTouching(eleventhcollider)){
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = 3.5;
}

if(blueRobo7.isTouching(firstcollider)){
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = 3.5;
}

if(blueRobo7.isTouching(secondcollider)){
	blueRobo7.velocityY = 0;
	blueRobo7.velocityX = 3.5;
}

if(blueRobo7.isTouching(thirdcollider)){
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = -3.5;
}

if(blueRobo7.isTouching(fourthcollider)){
	blueRobo7.velocityX = -3.5;
	blueRobo7.velocityY = 0;
}

if(blueRobo7.isTouching(fifthcollider)){
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = -3.5;
}

if(blueRobo7.isTouching(sixthcollider)){
	blueRobo7.velocityX = 3.5;
	blueRobo7.velocityY = 0;
}

if(blueRobo7.isTouching(seventhcollider)){
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = 3.5;
}

if(blueRobo7.isTouching(eighthcollider)){
	blueRobo7.velocityX = 3.5;
	blueRobo7.velocityY = 0; 
}

if(blueRobo7.isTouching(ninethcollider)){
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = 3.5;
}

if(blueRobo7.isTouching(tenthcollider)){
	blueRobo7.velocityX = -3.5;
	blueRobo7.velocityY = 0;
}

if(blueRobo7.isTouching(eleventhcollider)){
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = 3.5;
}

if(yellowRobo1.isTouching(firstcollider)){
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = 5;
}

if(yellowRobo1.isTouching(secondcollider)){
	yellowRobo1.velocityY = 0;
	yellowRobo1.velocityX = 5;
}

if(yellowRobo1.isTouching(thirdcollider)){
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = -5;
}

if(yellowRobo1.isTouching(fourthcollider)){
	yellowRobo1.velocityX = -5;
	yellowRobo1.velocityY = 0;
}

if(yellowRobo1.isTouching(fifthcollider)){
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = -5;
}

if(yellowRobo1.isTouching(sixthcollider)){
	yellowRobo1.velocityX = 5;
	yellowRobo1.velocityY = 0;
}

if(yellowRobo1.isTouching(seventhcollider)){
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = 5;
}

if(yellowRobo1.isTouching(eighthcollider)){
	yellowRobo1.velocityX = 5;
	yellowRobo1.velocityY = 0; 
}

if(yellowRobo1.isTouching(ninethcollider)){
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = 5;
}

if(yellowRobo1.isTouching(tenthcollider)){
	yellowRobo1.velocityX = -5;
	yellowRobo1.velocityY = 0;
}

if(yellowRobo1.isTouching(eleventhcollider)){
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = 5;
}

if(yellowRobo2.isTouching(firstcollider)){
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = 5;
}

if(yellowRobo2.isTouching(secondcollider)){
	yellowRobo2.velocityY = 0;
	yellowRobo2.velocityX = 5;
}

if(yellowRobo2.isTouching(thirdcollider)){
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = -5;
}

if(yellowRobo2.isTouching(fourthcollider)){
	yellowRobo2.velocityX = -5;
	yellowRobo2.velocityY = 0;
}

if(yellowRobo2.isTouching(fifthcollider)){
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = -5;
}

if(yellowRobo2.isTouching(sixthcollider)){
	yellowRobo2.velocityX = 5;
	yellowRobo2.velocityY = 0;
}

if(yellowRobo2.isTouching(seventhcollider)){
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = 5;
}

if(yellowRobo2.isTouching(eighthcollider)){
	yellowRobo2.velocityX = 5;
	yellowRobo2.velocityY = 0; 
}

if(yellowRobo2.isTouching(ninethcollider)){
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = 5;
}

if(yellowRobo2.isTouching(tenthcollider)){
	yellowRobo2.velocityX = -5;
	yellowRobo2.velocityY = 0;
}

if(yellowRobo2.isTouching(eleventhcollider)){
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = 5;
}

if(yellowRobo3.isTouching(firstcollider)){
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = 5;
}

if(yellowRobo3.isTouching(secondcollider)){
	yellowRobo3.velocityY = 0;
	yellowRobo3.velocityX = 5;
}

if(yellowRobo3.isTouching(thirdcollider)){
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = -5;
}

if(yellowRobo3.isTouching(fourthcollider)){
	yellowRobo3.velocityX = -5;
	yellowRobo3.velocityY = 0;
}

if(yellowRobo3.isTouching(fifthcollider)){
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = -5;
}

if(yellowRobo3.isTouching(sixthcollider)){
	yellowRobo3.velocityX = 5;
	yellowRobo3.velocityY = 0;
}

if(yellowRobo3.isTouching(seventhcollider)){
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = 5;
}

if(yellowRobo3.isTouching(eighthcollider)){
	yellowRobo3.velocityX = 5;
	yellowRobo3.velocityY = 0; 
}

if(yellowRobo3.isTouching(ninethcollider)){
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = 5;
}

if(yellowRobo3.isTouching(tenthcollider)){
	yellowRobo3.velocityX = -5;
	yellowRobo3.velocityY = 0;
}

if(yellowRobo3.isTouching(eleventhcollider)){
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = 5;
}

if(yellowRobo4.isTouching(firstcollider)){
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = 5;
}

if(yellowRobo4.isTouching(secondcollider)){
	yellowRobo4.velocityY = 0;
	yellowRobo4.velocityX = 5;
}

if(yellowRobo4.isTouching(thirdcollider)){
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = -5;
}

if(yellowRobo4.isTouching(fourthcollider)){
	yellowRobo4.velocityX = -5;
	yellowRobo4.velocityY = 0;
}

if(yellowRobo4.isTouching(fifthcollider)){
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = -5;
}

if(yellowRobo4.isTouching(sixthcollider)){
	yellowRobo4.velocityX = 5;
	yellowRobo4.velocityY = 0;
}

if(yellowRobo4.isTouching(seventhcollider)){
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = 5;
}

if(yellowRobo4.isTouching(eighthcollider)){
	yellowRobo4.velocityX = 5;
	yellowRobo4.velocityY = 0; 
}

if(yellowRobo4.isTouching(ninethcollider)){
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = 5;
}

if(yellowRobo4.isTouching(tenthcollider)){
	yellowRobo4.velocityX = -5;
	yellowRobo4.velocityY = 0;
}

if(yellowRobo4.isTouching(eleventhcollider)){
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = 5;
}

if(yellowRobo5.isTouching(firstcollider)){
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = 5;
}

if(yellowRobo5.isTouching(secondcollider)){
	yellowRobo5.velocityY = 0;
	yellowRobo5.velocityX = 5;
}

if(yellowRobo5.isTouching(thirdcollider)){
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = -5;
}

if(yellowRobo5.isTouching(fourthcollider)){
	yellowRobo5.velocityX = -5;
	yellowRobo5.velocityY = 0;
}

if(yellowRobo5.isTouching(fifthcollider)){
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = -5;
}

if(yellowRobo5.isTouching(sixthcollider)){
	yellowRobo5.velocityX = 5;
	yellowRobo5.velocityY = 0;
}

if(yellowRobo5.isTouching(seventhcollider)){
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = 5;
}

if(yellowRobo5.isTouching(eighthcollider)){
	yellowRobo5.velocityX = 5;
	yellowRobo5.velocityY = 0; 
}

if(yellowRobo5.isTouching(ninethcollider)){
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = 5;
}

if(yellowRobo5.isTouching(tenthcollider)){
	yellowRobo5.velocityX = -5;
	yellowRobo5.velocityY = 0;
}

if(yellowRobo5.isTouching(eleventhcollider)){
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = 5;
}

if(yellowRobo6.isTouching(firstcollider)){
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = 5;
}

if(yellowRobo6.isTouching(secondcollider)){
	yellowRobo6.velocityY = 0;
	yellowRobo6.velocityX = 5;
}

if(yellowRobo6.isTouching(thirdcollider)){
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = -5;
}

if(yellowRobo6.isTouching(fourthcollider)){
	yellowRobo6.velocityX = -5;
	yellowRobo6.velocityY = 0;
}

if(yellowRobo6.isTouching(fifthcollider)){
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = -5;
}

if(yellowRobo6.isTouching(sixthcollider)){
	yellowRobo6.velocityX = 5;
	yellowRobo6.velocityY = 0;
}

if(yellowRobo6.isTouching(seventhcollider)){
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = 5;
}

if(yellowRobo6.isTouching(eighthcollider)){
	yellowRobo6.velocityX = 5;
	yellowRobo6.velocityY = 0; 
}

if(yellowRobo6.isTouching(ninethcollider)){
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = 5;
}

if(yellowRobo6.isTouching(tenthcollider)){
	yellowRobo6.velocityX = -5;
	yellowRobo6.velocityY = 0;
}

if(yellowRobo6.isTouching(eleventhcollider)){
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = 5;
}

if(yellowRobo7.isTouching(firstcollider)){
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = 5;
}

if(yellowRobo7.isTouching(secondcollider)){
	yellowRobo7.velocityY = 0;
	yellowRobo7.velocityX = 5;
}

if(yellowRobo7.isTouching(thirdcollider)){
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = -5;
}

if(yellowRobo7.isTouching(fourthcollider)){
	yellowRobo7.velocityX = -5;
	yellowRobo7.velocityY = 0;
}

if(yellowRobo7.isTouching(fifthcollider)){
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = -5;
}

if(yellowRobo7.isTouching(sixthcollider)){
	yellowRobo7.velocityX = 5;
	yellowRobo7.velocityY = 0;
}

if(yellowRobo7.isTouching(seventhcollider)){
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = 5;
}

if(yellowRobo7.isTouching(eighthcollider)){
	yellowRobo7.velocityX = 5;
	yellowRobo7.velocityY = 0; 
}

if(yellowRobo7.isTouching(ninethcollider)){
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = 5;
}

if(yellowRobo7.isTouching(tenthcollider)){
	yellowRobo7.velocityX = -5;
	yellowRobo7.velocityY = 0;
}

if(yellowRobo7.isTouching(eleventhcollider)){
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = 5;
}

if(yellowRobo8.isTouching(firstcollider)){
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = 5;
}

if(yellowRobo8.isTouching(secondcollider)){
	yellowRobo8.velocityY = 0;
	yellowRobo8.velocityX = 5;
}

if(yellowRobo8.isTouching(thirdcollider)){
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = -5;
}

if(yellowRobo8.isTouching(fourthcollider)){
	yellowRobo8.velocityX = -5;
	yellowRobo8.velocityY = 0;
}

if(yellowRobo8.isTouching(fifthcollider)){
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = -5;
}

if(yellowRobo8.isTouching(sixthcollider)){
	yellowRobo8.velocityX = 5;
	yellowRobo8.velocityY = 0;
}

if(yellowRobo8.isTouching(seventhcollider)){
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = 5;
}

if(yellowRobo8.isTouching(eighthcollider)){
	yellowRobo8.velocityX = 5;
	yellowRobo8.velocityY = 0; 
}

if(yellowRobo8.isTouching(ninethcollider)){
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = 5;
}

if(yellowRobo8.isTouching(tenthcollider)){
	yellowRobo8.velocityX = -5;
	yellowRobo8.velocityY = 0;
}

if(yellowRobo8.isTouching(eleventhcollider)){
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = 5;
}

if(yellowRobo9.isTouching(firstcollider)){
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = 5;
}

if(yellowRobo9.isTouching(secondcollider)){
	yellowRobo9.velocityY = 0;
	yellowRobo9.velocityX = 5;
}

if(yellowRobo9.isTouching(thirdcollider)){
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = -5;
}

if(yellowRobo9.isTouching(fourthcollider)){
	yellowRobo9.velocityX = -5;
	yellowRobo9.velocityY = 0;
}

if(yellowRobo9.isTouching(fifthcollider)){
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = -5;
}

if(yellowRobo9.isTouching(sixthcollider)){
	yellowRobo9.velocityX = 5;
	yellowRobo9.velocityY = 0;
}

if(yellowRobo9.isTouching(seventhcollider)){
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = 5;
}

if(yellowRobo9.isTouching(eighthcollider)){
	yellowRobo9.velocityX = 5;
	yellowRobo9.velocityY = 0; 
}

if(yellowRobo9.isTouching(ninethcollider)){
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = 5;
}

if(yellowRobo9.isTouching(tenthcollider)){
	yellowRobo9.velocityX = -5;
	yellowRobo9.velocityY = 0;
}

if(yellowRobo9.isTouching(eleventhcollider)){
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = 5;
}

if(yellowRobo10.isTouching(firstcollider)){
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = 5;
}

if(yellowRobo10.isTouching(secondcollider)){
	yellowRobo10.velocityY = 0;
	yellowRobo10.velocityX = 5;
}

if(yellowRobo10.isTouching(thirdcollider)){
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = -5;
}

if(yellowRobo10.isTouching(fourthcollider)){
	yellowRobo10.velocityX = -5;
	yellowRobo10.velocityY = 0;
}

if(yellowRobo10.isTouching(fifthcollider)){
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = -5;
}

if(yellowRobo10.isTouching(sixthcollider)){
	yellowRobo10.velocityX = 5;
	yellowRobo10.velocityY = 0;
}

if(yellowRobo10.isTouching(seventhcollider)){
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = 5;
}

if(yellowRobo10.isTouching(eighthcollider)){
	yellowRobo10.velocityX = 5;
	yellowRobo10.velocityY = 0; 
}

if(yellowRobo10.isTouching(ninethcollider)){
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = 5;
}

if(yellowRobo10.isTouching(tenthcollider)){
	yellowRobo10.velocityX = -5;
	yellowRobo10.velocityY = 0;
}

if(yellowRobo10.isTouching(eleventhcollider)){
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = 5;
}

if(yellowRobo11.isTouching(firstcollider)){
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = 5;
}

if(yellowRobo11.isTouching(secondcollider)){
	yellowRobo11.velocityY = 0;
	yellowRobo11.velocityX = 5;
}

if(yellowRobo11.isTouching(thirdcollider)){
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = -5;
}

if(yellowRobo11.isTouching(fourthcollider)){
	yellowRobo11.velocityX = -5;
	yellowRobo11.velocityY = 0;
}

if(yellowRobo11.isTouching(fifthcollider)){
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = -5;
}

if(yellowRobo11.isTouching(sixthcollider)){
	yellowRobo11.velocityX = 5;
	yellowRobo11.velocityY = 0;
}

if(yellowRobo11.isTouching(seventhcollider)){
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = 5;
}

if(yellowRobo11.isTouching(eighthcollider)){
	yellowRobo11.velocityX = 5;
	yellowRobo11.velocityY = 0; 
}

if(yellowRobo11.isTouching(ninethcollider)){
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = 5;
}

if(yellowRobo11.isTouching(tenthcollider)){
	yellowRobo11.velocityX = -5;
	yellowRobo11.velocityY = 0;
}

if(yellowRobo11.isTouching(eleventhcollider)){
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = 5;
}

if(keyWentDown("y") && coinvalue>0){
	ybullet1 = createSprite(410,130,15,15);
	ybullet1.addImage(ybullet);
	ybullet1.velocityX = -3.5;  
	coinvalue = coinvalue-1;
	ybullet2 = createSprite(475,130,15,15);
	ybullet2.addImage(ybullet);
	ybullet2.velocityX = 3.5;   
	coinvalue = coinvalue-1;
	ybullet3 = createSprite(450,110,15,15);
	ybullet3.addImage(ybullet);
	ybullet3.velocityY = -3.5;   
	coinvalue = coinvalue-1;
	ybullet4 = createSprite(450,145,15,15);
	ybullet4.addImage(ybullet);
	ybullet4.velocityY = 3.5;     
	coinvalue = coinvalue-1;   

	yellowbullet1Group.add(ybullet1,ybullet2,ybullet3,ybullet4);

	ybullet6 = createSprite(725,430,15,15);
	ybullet6.addImage(ybullet);
	ybullet6.velocityX = 3.5;   
	coinvalue = coinvalue-1;
	ybullet7 = createSprite(700,410,15,15);
	ybullet7.addImage(ybullet);
	ybullet7.velocityY = -3.5;   
	coinvalue = coinvalue-1;
	ybullet8 = createSprite(700,445,15,15);
	ybullet8.addImage(ybullet);
	ybullet8.velocityY = 3.5;     
	coinvalue = coinvalue-1;   

	yellowbullet2Group.add(ybullet6,ybullet7,ybullet8);
}
	if(keyWentDown("b") && coinvalue>0){
		//450,300
	bbullet1 = createSprite(457.5,280,15,15);
	bbullet1.addImage(bbullet);
	bbullet1.velocityX = 3.5;
	bbullet1.velocityY = -3.5;
	coinvalue = coinvalue-1;
	bbullet2 = createSprite(440,290.5,15,15);
	bbullet2.addImage(bbullet);
	bbullet2.velocityX = -3.5;
	bbullet2.velocityY = 3.5;
	coinvalue = coinvalue-1;    
	bbullet3 = createSprite(445,280,15,15);
	bbullet3.addImage(bbullet);
	bbullet3.velocityX = -3.5;
	bbullet3.velocityY = -3.5;
	coinvalue = coinvalue-1;          
	bbullet4 = createSprite(460,290.5,15,15);
	bbullet4.addImage(bbullet);
	bbullet4.velocityX = 3.5;
	bbullet4.velocityY = 3.5;
	coinvalue = coinvalue-1;       

	bluebullet1Group.add(bbullet1,bbullet2,bbullet3,bbullet4);

//225,275
	bbullet5 = createSprite(232.5,255,15,15);
	bbullet5.addImage(bbullet);
	bbullet5.velocityX = 3.5;
	bbullet5.velocityY = -3.5;
	coinvalue = coinvalue-1;
	bbullet6 = createSprite(215,265.5,15,15);
	bbullet6.addImage(bbullet);
	bbullet6.velocityX = -3.5;
	bbullet6.velocityY = 3.5;
	coinvalue = coinvalue-1;    
	bbullet7 = createSprite(230,255,15,15);
	bbullet7.addImage(bbullet);
	bbullet7.velocityX = -3.5;
	bbullet7.velocityY = -3.5;
	coinvalue = coinvalue-1;          
	bbullet8 = createSprite(235,265.5,15,15);
	bbullet8.addImage(bbullet);
	bbullet8.velocityX = 3.5;
	bbullet8.velocityY = 3.5;
	coinvalue = coinvalue-1;       

	bluebullet2Group.add(bbullet5,bbullet6,bbullet7,bbullet8);

	// 775,175
	bbullet9 = createSprite(782.5,155,15,15);
	bbullet9.addImage(bbullet);
	bbullet9.velocityX = 3.5;
	bbullet9.velocityY = -3.5;
	coinvalue = coinvalue-1;
	bbullet10 = createSprite(765,185.5,15,15);
	bbullet10.addImage(bbullet);
	bbullet10.velocityX = -3.5;
	bbullet10.velocityY = 3.5;
	coinvalue = coinvalue-1;    
	bbullet11 = createSprite(780,155,15,15);
	bbullet11.addImage(bbullet);
	bbullet11.velocityX = -3.5;
	bbullet11.velocityY = -3.5;
	coinvalue = coinvalue-1;          
	bbullet12 = createSprite(785,185.5,15,15);
	bbullet12.addImage(bbullet);
	bbullet12.velocityX = 3.5;
	bbullet12.velocityY = 3.5;
	coinvalue = coinvalue-1;       

	bluebullet3Group.add(bbullet9,bbullet10,bbullet11,bbullet12);
}

if(redRobo1.isTouching(bluebullet1Group) || redRobo1.isTouching(yellowbullet1Group) || redRobo1.isTouching(yellowbullet2Group) || redRobo1.isTouching(bluebullet2Group) || redRobo1.isTouching(bluebullet3Group)){

	redRobo1.scale = 0.15;
	redRobo1.addImage(coinimage);
	redRobo1.velocityX = 0;
	redRobo1.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(redRobo2.isTouching(yellowbullet1Group) || redRobo2.isTouching(bluebullet1Group) || redRobo2.isTouching(yellowbullet2Group) || redRobo2.isTouching(bluebullet2Group) || redRobo2.isTouching(bluebullet3Group)){

	redRobo2.scale = 0.15;
	redRobo2.addImage(coinimage);
	redRobo2.velocityX = 0;
	redRobo2.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(redRobo3.isTouching(yellowbullet1Group) || redRobo3.isTouching(bluebullet1Group) || redRobo3.isTouching(yellowbullet2Group) || redRobo3.isTouching(bluebullet2Group) || redRobo3.isTouching(bluebullet3Group)){

	redRobo3.scale = 0.15;
	redRobo3.addImage(coinimage);
	redRobo3.velocityX = 0;
	redRobo3.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(redRobo4.isTouching(yellowbullet1Group) || redRobo4.isTouching(bluebullet1Group) || redRobo4.isTouching(yellowbullet2Group) || redRobo4.isTouching(bluebullet2Group) || redRobo4.isTouching(bluebullet3Group)){

	redRobo4.scale = 0.15;
	redRobo4.addImage(coinimage);
	redRobo4.velocityX = 0;
	redRobo4.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(redRobo5.isTouching(yellowbullet1Group) || redRobo5.isTouching(bluebullet1Group) || redRobo5.isTouching(yellowbullet2Group) || redRobo5.isTouching(bluebullet2Group) || redRobo5.isTouching(bluebullet3Group)){

	redRobo5.scale = 0.15;
	redRobo5.addImage(coinimage);
	redRobo5.velocityX = 0;
	redRobo5.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo1.isTouching(yellowbullet1Group) || blueRobo1.isTouching(bluebullet1Group) || blueRobo1.isTouching(yellowbullet2Group) || blueRobo1.isTouching(bluebullet2Group) || blueRobo1.isTouching(bluebullet3Group)){

	blueRobo1.scale = 0.15;
	blueRobo1.addImage(coinimage);
	blueRobo1.velocityX = 0;
	blueRobo1.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo2.isTouching(bluebullet1Group) || blueRobo2.isTouching(yellowbullet1Group) || blueRobo2.isTouching(yellowbullet2Group) || blueRobo2.isTouching(bluebullet2Group) || blueRobo2.isTouching(bluebullet3Group)){

	blueRobo2.scale = 0.15;
	blueRobo2.addImage(coinimage);
	blueRobo2.velocityX = 0;
	blueRobo2.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo3.isTouching(yellowbullet1Group) || blueRobo3.isTouching(bluebullet1Group) || blueRobo3.isTouching(yellowbullet2Group) || blueRobo3.isTouching(bluebullet2Group) || blueRobo3.isTouching(bluebullet3Group)){

	blueRobo3.scale = 0.15;
	blueRobo3.addImage(coinimage);
	blueRobo3.velocityX = 0;
	blueRobo3.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo4.isTouching(yellowbullet1Group) || blueRobo4.isTouching(bluebullet1Group) || blueRobo4.isTouching(yellowbullet2Group) || blueRobo4.isTouching(bluebullet2Group) || blueRobo4.isTouching(bluebullet3Group)){

	blueRobo4.scale = 0.15;
	blueRobo4.addImage(coinimage);
	blueRobo4.velocityX = 0;
	blueRobo4.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo5.isTouching(yellowbullet1Group) || blueRobo5.isTouching(bluebullet1Group) || blueRobo5.isTouching(yellowbullet2Group) || blueRobo5.isTouching(bluebullet2Group) || blueRobo5.isTouching(bluebullet3Group)){

	blueRobo5.scale = 0.15;
	blueRobo5.addImage(coinimage);
	blueRobo5.velocityX = 0;
	blueRobo5.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo6.isTouching(yellowbullet1Group) || blueRobo6.isTouching(bluebullet1Group) || blueRobo6.isTouching(yellowbullet2Group) || blueRobo6.isTouching(bluebullet2Group) || blueRobo6.isTouching(bluebullet3Group)){

	blueRobo6.scale = 0.15;
	blueRobo6.addImage(coinimage);
	blueRobo6.velocityX = 0;
	blueRobo6.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(blueRobo7.isTouching(bluebullet1Group) || blueRobo7.isTouching(yellowbullet1Group) || blueRobo7.isTouching(yellowbullet2Group) || blueRobo7.isTouching(bluebullet2Group) || blueRobo7.isTouching(bluebullet3Group)){

	blueRobo7.scale = 0.15;
	blueRobo7.addImage(coinimage);
	blueRobo7.velocityX = 0;
	blueRobo7.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo1.isTouching(bluebullet1Group) || yellowRobo1.isTouching(yellowbullet1Group) || yellowRobo1.isTouching(yellowbullet2Group) || yellowRobo1.isTouching(bluebullet2Group) || yellowRobo1.isTouching(bluebullet3Group)){

	yellowRobo1.scale = 0.15;
	yellowRobo1.addImage(coinimage);
	yellowRobo1.velocityX = 0;
	yellowRobo1.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo2.isTouching(yellowbullet1Group) || yellowRobo2.isTouching(bluebullet1Group) || yellowRobo2.isTouching(yellowbullet2Group) || yellowRobo2.isTouching(bluebullet2Group) || yellowRobo2.isTouching(bluebullet3Group)){

	yellowRobo2.scale = 0.15;
	yellowRobo2.addImage(coinimage);
	yellowRobo2.velocityX = 0;
	yellowRobo2.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo3.isTouching(yellowbullet1Group) || yellowRobo3.isTouching(bluebullet1Group) || yellowRobo3.isTouching(yellowbullet2Group) || yellowRobo3.isTouching(bluebullet2Group) || yellowRobo3.isTouching(bluebullet3Group)){

	yellowRobo3.scale = 0.15;
	yellowRobo3.addImage(coinimage);
	yellowRobo3.velocityX = 0;
	yellowRobo3.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo4.isTouching(yellowbullet1Group) || yellowRobo4.isTouching(bluebullet1Group) || yellowRobo4.isTouching(yellowbullet2Group) || yellowRobo4.isTouching(bluebullet2Group) || yellowRobo4.isTouching(bluebullet3Group)){

	yellowRobo4.scale = 0.15;
	yellowRobo4.addImage(coinimage);
	yellowRobo4.velocityX = 0;
	yellowRobo4.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo5.isTouching(yellowbullet1Group) || yellowRobo5.isTouching(bluebullet1Group) || yellowRobo5.isTouching(yellowbullet2Group) || yellowRobo5.isTouching(bluebullet2Group) || yellowRobo5.isTouching(bluebullet3Group)){

	yellowRobo5.scale = 0.15;
	yellowRobo5.addImage(coinimage);
	yellowRobo5.velocityX = 0;
	yellowRobo5.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo6.isTouching(yellowbullet1Group) || yellowRobo6.isTouching(bluebullet1Group) || yellowRobo6.isTouching(yellowbullet2Group) || yellowRobo6.isTouching(bluebullet2Group) || yellowRobo6.isTouching(bluebullet3Group)){

	yellowRobo6.scale = 0.15;
	yellowRobo6.addImage(coinimage);
	yellowRobo6.velocityX = 0;
	yellowRobo6.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo7.isTouching(yellowbullet1Group) || yellowRobo7.isTouching(bluebullet1Group) || yellowRobo7.isTouching(yellowbullet2Group) || yellowRobo7.isTouching(bluebullet2Group) || yellowRobo7.isTouching(bluebullet3Group)){

	yellowRobo7.scale = 0.15;
	yellowRobo7.addImage(coinimage);
	yellowRobo7.velocityX = 0;
	yellowRobo7.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo8.isTouching(yellowbullet1Group) || yellowRobo8.isTouching(bluebullet1Group) || yellowRobo8.isTouching(yellowbullet2Group) || yellowRobo8.isTouching(bluebullet2Group) || yellowRobo8.isTouching(bluebullet3Group)){

	yellowRobo8.scale = 0.15;
	yellowRobo8.addImage(coinimage);
	yellowRobo8.velocityX = 0;
	yellowRobo8.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo9.isTouching(bluebullet3Group) || yellowRobo9.isTouching(bluebullet1Group) || yellowRobo9.isTouching(yellowbullet2Group) || yellowRobo9.isTouching(bluebullet2Group) || yellowRobo9.isTouching(yellowbullet1Group)){

	yellowRobo9.scale = 0.15;
	yellowRobo9.addImage(coinimage);
	yellowRobo9.velocityX = 0;
	yellowRobo9.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo10.isTouching(yellowbullet1Group) || yellowRobo10.isTouching(bluebullet1Group) || yellowRobo10.isTouching(yellowbullet2Group) || yellowRobo10.isTouching(bluebullet2Group) || yellowRobo10.isTouching(bluebullet3Group)){

	yellowRobo10.scale = 0.15;
	yellowRobo10.addImage(coinimage);
	yellowRobo10.velocityX = 0;
	yellowRobo10.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(yellowRobo11.isTouching(bluebullet1Group) || yellowRobo11.isTouching(yellowbullet1Group) || yellowRobo11.isTouching(yellowbullet2Group) || yellowRobo11.isTouching(bluebullet2Group) || yellowRobo11.isTouching(bluebullet3Group)){

	yellowRobo11.scale = 0.15;
	yellowRobo11.addImage(coinimage);
	yellowRobo11.velocityX = 0;
	yellowRobo11.velocityY = 0;
	yellowbullet1Group.destroyEach();
	yellowbullet2Group.destroyEach();
	bluebullet1Group.destroyEach();
	bluebullet2Group.destroyEach();
	bluebullet3Group.destroyEach();
}

if(redRobo1.isTouching(bill)){

	coinvalue = coinvalue+8;
	redRobo1.destroy();
	destroyedRobos = destroyedRobos+1
}

if(redRobo2.isTouching(bill)){

	coinvalue = coinvalue+8;
	redRobo2.destroy();
	destroyedRobos = destroyedRobos+1
}

if(redRobo3.isTouching(bill)){

	coinvalue = coinvalue+8;
	redRobo3.destroy();
	destroyedRobos = destroyedRobos+1
}

if(redRobo4.isTouching(bill)){

	coinvalue = coinvalue+8;
	redRobo4.destroy();
	destroyedRobos = destroyedRobos+1
}

if(redRobo5.isTouching(bill)){

	coinvalue = coinvalue+8;
	redRobo5.destroy();
	destroyedRobos = destroyedRobos+1
}

if(blueRobo1.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo1.destroy();
	destroyedRobos = destroyedRobos+1
}

if(blueRobo2.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo2.destroy();
	destroyedRobos = destroyedRobos+1
}

if(blueRobo3.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo3.destroy();
	destroyedRobos = destroyedRobos+1
}

if(blueRobo4.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo4.destroy();
	destroyedRobos = destroyedRobos+1
}

if(blueRobo5.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo5.destroy();
	destroyedRobos = destroyedRobos+1
}

if(blueRobo6.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo6.destroy();
	destroyedRobos = destroyedRobos+1

}

if(blueRobo7.isTouching(bill)){

	coinvalue = coinvalue+8;
	blueRobo7.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo1.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo1.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo2.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo2.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo3.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo3.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo4.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo4.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo5.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo5.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo6.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo6.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo7.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo7.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo8.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo8.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo9.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo9.destroy();
	destroyedRobos = destroyedRobos+1
}

if(yellowRobo10.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo10.destroy();
	destroyedRobos = destroyedRobos+1
}
if(yellowRobo11.isTouching(bill)){

	coinvalue = coinvalue+8;
	yellowRobo11.destroy();
	destroyedRobos = destroyedRobos+1
}

if(bill.isTouching(yellowbullet1Group)){

	yellowbullet1Group.destroyEach();
	life = life-10;
}

if(bill.isTouching(bluebullet1Group)){

	bluebullet1Group.destroyEach();
	life = life-10;
}

if(bill.isTouching(yellowbullet2Group)){

	yellowbullet2Group.destroyEach();
	life = life-10;
}

if(bill.isTouching(bluebullet2Group)){


	bluebullet2Group.destroyEach();
	life = life-10;
}

if(bill.isTouching(bluebullet3Group)){

	bluebullet3Group.destroyEach();
	life = life-10;
}

if(life === 0|| redRobo1.isTouching(watchtower) || redRobo2.isTouching(watchtower) || redRobo3.isTouching(watchtower) || redRobo4.isTouching(watchtower) || redRobo5.isTouching(watchtower) || blueRobo1.isTouching(watchtower) || blueRobo2.isTouching(watchtower) || blueRobo3.isTouching(watchtower) || blueRobo4.isTouching(watchtower) || blueRobo5.isTouching(watchtower) || blueRobo6.isTouching(watchtower) || blueRobo7.isTouching(watchtower) || yellowRobo1.isTouching(watchtower) || yellowRobo2.isTouching(watchtower) || yellowRobo3.isTouching(watchtower) || yellowRobo4.isTouching(watchtower) || yellowRobo5.isTouching(watchtower) || yellowRobo6.isTouching(watchtower) || yellowRobo7.isTouching(watchtower) || yellowRobo8.isTouching(watchtower) || yellowRobo9.isTouching(watchtower) || yellowRobo10.isTouching(watchtower) || yellowRobo11.isTouching(watchtower)){

gameState = GAMEOVER;
}

if(destroyedRobos >= 23){
	gameState = WIN;	
}
bill.collide(edges);
bill.collide(treecollider1);
bill.collide(treecollider2);
bill.collide(watchtower);
}

if(gameState===GAMEOVER){

	fill("red");
	textSize(35)
	strokeWeight(2.5);
	stroke("black");
	text(" YOU  HAVE  LOST  YOUR  VILLAGE ",175,250);
	redRobo1.destroy();
	redRobo2.destroy();
	redRobo3.destroy();
	redRobo4.destroy();
	redRobo5.destroy();
	blueRobo1.destroy();
	blueRobo2.destroy();
	blueRobo3.destroy();
	blueRobo4.destroy();
	blueRobo5.destroy();
	blueRobo6.destroy();
	blueRobo7.destroy();
	yellowRobo1.destroy();
	yellowRobo2.destroy();
	yellowRobo3.destroy();
	yellowRobo4.destroy();
	yellowRobo5.destroy();
	yellowRobo6.destroy();
	yellowRobo7.destroy();
	yellowRobo8.destroy();
	yellowRobo9.destroy();
	yellowRobo10.destroy();
	yellowRobo11.destroy();
}

if(gameState===WIN){

	textFont("MineCrafter");
	textSize(25);
	fill("white");
	strokeWeight(2);
	stroke("black");
	text("THANK YOU SO MUCH",350,210);
	text("YOU HAVE SAVED MY VILLAGE",300,260);
}
textFont("MineCrafter");
textSize(25);
fill("white");
strokeWeight(2);
stroke("black");
text("Life : " + life,20,25);

textSize(25);
fill("yellow");
strokeWeight(3);
stroke("black");
text("Coins Left = "+ coinvalue ,20,70);

textSize(25);
fill("white");
strokeWeight(3);
stroke("black");
text("Bullets Left = "+ coinvalue ,20,115);

  drawSprites();
}