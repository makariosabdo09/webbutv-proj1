let carX = 250;
let carY = 500;
let carH = 100;
let carW = 50;
let carSpeed = 5;

let carBlueX;
let carBlueY = -100;
let carBlueH = 100;
let carBlueW = 50;
let carBlueSpeed = 5;

let gameState = "START";

function setup() {
  createCanvas(500, 650);
  describe("A simple top-down car dodging game.");
  carBlueX = floor(random(width - carBlueW));
}

function draw() {
  background(220);

  if (gameState == "START") {
    // Rita upp startsida
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text("GTA 6", width / 2, 125);
    textSize(16);
    text("Tryck på SPACE för att starta", width / 2, 200);

  } else if (gameState == "PLAY") {
    // Rita bilarna
    fill("red");
    rect(carX, carY, carW, carH);
    fill("blue");
    rect(carBlueX, carBlueY, carBlueW, carBlueH);

    // Tangentbordsstyrning (med gränser så bilen inte åker utanför skärmen)
    if (keyIsDown(LEFT_ARROW) && carX > 0) {
      carX = carX - carSpeed;
    }
    if (keyIsDown(RIGHT_ARROW) && carX < width - carW) {
      carX = carX + carSpeed;
    }

    // Flytta motståndarbilen
    carBlueY = carBlueY + carBlueSpeed;
    if (carBlueY > height) {
      carBlueY = -carBlueH;
      carBlueX = random(width - carBlueW);
    }

    // Kontrollera krock
    if (
      carX + carW > carBlueX &&
      carX < carBlueX + carBlueW &&
      carY + carH > carBlueY &&
      carY < carBlueY + carBlueH
    ) {
      gameState = "GAMEOVER";
    }

  } else if (gameState == "GAMEOVER") {
    // När man krockar
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text("GAME OVER", width / 2, 245);
    textSize(20);
    text("KROCK!", width / 2, 300);
    text("Tryck på SPACE för att starta om spelet", width / 2, height - 40);
  }
}

function keyPressed() {
  // Starta eller starta om spelet när man trycker på blanksteg (SPACE)
  if (keyCode == 32 && (gameState == "START" || gameState == "GAMEOVER")) {
    carX = 250;
    carBlueY = -carBlueH;
    carBlueX = floor(random(width - carBlueW));
    gameState = "PLAY";
  }
}