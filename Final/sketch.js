var ship;
var head = [];
var drops = [];
var skull;
var guitar;
var bone;
var background;
function preload() {
  skull = loadImage('images/skull.png');
  guitar = loadImage('images/Guitar.png');
  bone = loadImage('images/shot.png');
  skullface = loadImage('images/skullback.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    head[i] = new Head(i*80+80, 60);
  }
}

function draw() {
  background(skullface);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < head.length; j++) {
      if (drops[i].hits(head[j])) {
        head[j].grow();
        drops[i].evaporate();
        if (head[j].isDead) {
          head.splice(j);
        }
      }
    }
  }

  var edge = false;

  for (var i = 0; i < head.length; i++) {
    head[i].show();
    head[i].move();
    if (head[i].x > width || head[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < head.length; i++) {
      head[i].shiftDown();
    }
  }

  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}