




function preload() {
    
}

function setup() {
    var canvas = createCanvas(700, 600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    
}

function modelLoaded() {
  


}

function startGame() {
    
}

function draw() {
   

}



//function reset when ball does notcame in the contact of padde
function reset() {
  
}


//function midline draw a line in center
function midline() {
   
}


//function drawScore show scores
function drawScore() {
    textAlign(CENTER);
    textSize(20);
    fill("white");
    stroke(250, 0, 0)
    text("Player:", 100, 50)
    text(playerscore, 140, 50);
    text("Computer:", 500, 50)
    text(pcscore, 555, 50)
}


//very important function of this game
function move() {
  


}

function restart() {
  
}