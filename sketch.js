var surface1, surface2, surface3, surface4, surface5;
var box;

function setup(){
    //create the canvas
    canvas = createCanvas(1000,650);

    //create 4 surfaces
    surface1 = createSprite(100,640,150,50);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,640,150,50);
    surface2.shapeColor = "red";

    surface3 = createSprite(500,640,150,50);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700,640,150,50);
    surface4.shapeColor = "green";

    surface5 = createSprite(900,640,150,50);
    surface5.shapeColor = "magenta";

    //create box sprite and give velocity
    box = createSprite(500,325,20,20);
    box.shapeColor = "white";
    

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    createEdgeSprites();

    //velocity of the box
    box.velocityX = 2;
    box.velocityY = 2;

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)) {
        box.bounceOff(surface1);
        box.shapeColor = "blue";
    }

    if(box.isTouching(surface2)) {
        box.bounceOff(surface2);
        box.shapeColor = "red";
    }

    if(box.isTouching(surface3)) {
        box.bounceOff(surface3);
        box.shapeColor = "yellow";
    }

    if(box.isTouching(surface4)) {
        box.bounceOff(surface4); 
        box.shapeColor = "green";
    }

    if(box.isTouching(surface5)) {
        box.bounceOff(surface5);
        box.shapeColor = "magenta";
    }




    drawSprites();
}
