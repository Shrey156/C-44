var database,form,player,playerCount;


function preload() {

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  player = new Player();
 // player.getPlayerCount();
  form = new Form();


}

function draw() {
  background(255,255,255);  

  form.display();
  drawSprites();
}