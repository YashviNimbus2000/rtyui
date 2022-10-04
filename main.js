img = "";

function preload()
{
 img = loadImage('dog_cat.jpg');     
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
   
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    
    fill("#0000FF");
    text("Cat", 315, 115);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 300, 275);

    fill("#00FF00");
    text("Bowl", 215 , 315);
    noFill();
    stroke("#00FF00");
    rect(200, 300, 300, 200);

}