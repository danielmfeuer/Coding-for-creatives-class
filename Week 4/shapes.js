

function setup() {
	createCanvas(640, 560);
}

function draw() {
	stroke(200, 0, 33);
	fill(0);
	rect(100, 200, 75, 150);

	stroke(0, 0, 33);
	fill(200, 150, 0);
	ellipse(300, 500, 55, 100);

	stroke(0);
	fill(100, 150, 55);
	ellipse(300, 500, 200, 190);

	stroke(0);
	fill(10, 20, 55);
	ellipse(mouseX, mouseY, 20, 10);

	stroke(0);
	fill(22, 150, 155);
	ellipse(30, 50, 20, 50);

	stroke(0);
	fill(200, 50, 155);
	ellipse(60, 220, 100, 90);


}