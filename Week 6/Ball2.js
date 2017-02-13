var balls = [];


function setup(){
	createCanvas(600, 400);
	for (var i = 0; i < 400; i++ )
		balls[i] = new Balls
			

function draw(){
	background(0);
	for (var i = 0; i < balls.length; i++)
		balls[i].move(); 
		balls[i].display();
}

function mousePressed(){
	ball.push(new Balls(mouseX, mouseY));
	}

function Balls(){
			this.x = 330
			this.y = 150
			this.xspeed = 5
			this.yspeed = -3 

				this.display: function(){
					Fill(this.x, this.y, mouseX);
					ellipse(this.x, this.y, mouseY, 24);
				}

				this.move: function(){
					this.x = this.x + this.xspeed;
					this.y = this.y + this.yspeed;
				}

		 		this.bounce: function(){
					if (this.x > width || this.x < 0) {
						this.xspeed = this.xspeed * -1;
					}
					if (this.y > height || this.y < 0) {
						this.yspeed = this.yspeed * -1; 
					}
				}

}
}