var x = 0;
var y = 0;
var speed = 3;

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);
		if(mouseIsPressed){
			background(random)
		}
	fill(mousex, mouseY, 20);
	ellipse(x, y, mouseX, mouseY);

	if(mouseY > height || y < 0) {
		speed = speed * -1
	};

	if(mouseX > width || x < 0) {
		speed = speed * -1
	};
	
	x = x + speed;

	y = y + speed;
}
