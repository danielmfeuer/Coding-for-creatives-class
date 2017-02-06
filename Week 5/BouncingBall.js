var x = 0;
var y = 0;
var speed = 3;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	
	background(0);
		if (mouseIsPressed) {
			background(255)
		}
	fill(x, y, 20);
	ellipse(x, y, mousex, mousey);

	if (y > height || y < 0) {
		speed = speed * -1
	};

	if (x > width || x < 0) {
		speed = speed * -1
	};
	
	x = x + speed;

	y = y + speed;
}
