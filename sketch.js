var block1,block2,block3,block4,ball;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1=createSprite(0,580,360,30);
block1.shapeColor="orange";
block2=createSprite(295,580,200,30);
block2.shapeColor="blue";
block3=createSprite(515,580,200,30);
block3.shapeColor="pink";
block4=createSprite(740,580,220,30);
block4.shapeColor="yellow";
ball=createSprite(random(20,750),100,40,40);
ball.shapeColor="white";
ball.velocityX=4;
ball.velocityY=9;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching (ball)&&ball.bounceOff(block1)){
        ball.shapeColor="orange";
        music.play();
    }
    if(block2.isTouching (ball)&&ball.bounceOff(block2)){
        ball.shapeColor="blue";
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    } if(block3.isTouching (ball)&&ball.bounceOff(block3)){
        ball.shapeColor="pink";
    } if(block4.isTouching (ball)&&ball.bounceOff(block4)){
        ball.shapeColor="yellow";
    }

    drawSprites();



    //add condition to check if box touching surface and make it box
}
