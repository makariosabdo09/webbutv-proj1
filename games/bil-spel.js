let carX=250;
let carY=500;
let carH=100;
let carW=50;
let carSpeed=5;

let carBlueX;
let carBlueY=0;
let carBlueH=100;
let carBlueW=50;
let carBlueSpeed=4;

let gameState="START";

function setup() {
    createCanvas(500, 650);     
    // Help blind or low-vision users understand your sketch
    describe("A 400 by 400 pixel gray canvas.");
    carBlueX= floor (random(100));
}
   slumptal = floor (random(0,100));
  
function draw() {
  background(220);
    
  if(gameState=="START"){
    //Rita upp startsida
    textAlign(CENTER);
    textSize(32);
    text("GTA 6", width/2, 125);
    textSize(16);
    text("Tryck på SPACE för att starta", width/2, 200);
  } else if(gameState=="PLAY"){
    //Spela spelet

    // Rita bilen
    fill('red');
    rect(carX,carY,carW,carH);  
    fill('blue');
    rect(carBlueX,carBlueY,carBlueW,carBlueH);  


    //Tangentborddstyrning
    if(keyIsDown(LEFT_ARROW)){
      carX=carX-carSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
      carX=carX+carSpeed;
    }

  }
  carBlueY=carBlueY+4
  if (carBlueY>height){
    carBlueY= 0
    carBlueX = random(width);
  }
}

function keyPressed(){
  //Starta spelet när man trycker blanksteg.
  if(keyCode==32){
    gameState="PLAY";
  }
}
