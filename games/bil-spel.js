let carX=50;
let carY=50;
let carSize=100;
let carSpeed=2;

let gameState="START";

function setup() {
    createCanvas(400, 400);
    // Help blind or low-vision users understand your sketch
    describe("A 400 by 400 pixel gray canvas.");
}

  
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
    //Tangentborddstyrning
    if(keyIsDown("a")){
      carX=carX-carSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
      car=carX+carSpeed;
    }
    if(keyIsDown(UP_ARROW)){
      carY=carY-carSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
      carY=carY+carSpeed;
    } 

    rect(50,50,carW,carH);  
  }
}

function keyPressed(){
  //Starta spelet när man trycker blanksteg.
  if(keyCode==32){
    gameState="PLAY";
  }
}
