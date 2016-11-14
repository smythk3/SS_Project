var x = 180;
var y = 180;
var xspeed = 5;
var yspeed = 15;

var hello = 0;
var value = 255;

function setup() {
  createCanvas(800,500);

}

function draw() {

	//distance from center of the screen
	var d = dist(800/2, 500/2, mouseX, mouseY);

  	fill (hello);
  	ellipse (x, y, 50,50);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 800 || x < 10)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 500 || y < 0) {
	 	  yspeed = -yspeed;
  	}

if (mouseIsPressed) {
  fill(random(value,0,60));
  ellipse(x,y,50,50);
}
}

