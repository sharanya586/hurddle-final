var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,hurdle1,hurdle2,hurdle3,hurdle4,hurdle6,hurdle7,hurdle8;

var ps, p1, p2, p3, p4,track,Img;
var hurdles=[]
function preload() {
  track = loadImage('images/ezgif.com-rotate.jpg');
  Img= loadAnimation("images/0.png","images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png");}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.update(2);
    textSize(40);
    fill("red");
    text("Player rank : " + player.rank,displayWidth/2-50,displayHeight-allPlayers[plr].distance-100);
    var pr = createSprite(displayWidth/2-50,displayHeight-allPlayers[plr].distance-100);
    drawSprites();

  }
}
