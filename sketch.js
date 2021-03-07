var canvas;
var music;
var block1, block2, block3, block4
var edges,ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(20,580,200, 30)
    block1.shapeColor="blue";
    block2=createSprite(290, 580,200,30)
    block2.shapeColor="yellow";
    block3=createSprite(515,580,200,30)
    block3.shapeColor="purple";
    block4=createSprite(750,580,200,30)
    block4.shapeColor="orange";
    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="pink";
    ball.velocityX=4;
    ball.velocityY=9;




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(ball.isTouching(block1)&& ball.bounceOff(block1)){
        ball.shapeColor="blue";
        music.play()
    }
    if(ball.isTouching(block2)&& ball.bounceOff(block2)){
        ball.shapeColor="yellow";
    }
    if(ball.isTouching(block3)&& ball.bounceOff(block3)){
        ball.shapeColor="purple"
    }
    if(ball.isTouching(block4)&& ball.bounceOff(block4)){
        ball.shapeColor="orange"
    }


    drawSprites();


    //add condition to check if box touching surface and make it box
}
