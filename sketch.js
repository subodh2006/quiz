var gameState = 0;
var database,quiz,question,player,form;
var playerCount = 0;
var player1,player2;

function setup(){
  canvas = createCanvas(1000,600);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start();
  question = new Question();
}


function draw(){
  background("pink");
  clues();
  question.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
}

  

