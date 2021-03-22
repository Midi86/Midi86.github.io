var wind;
var windSpeed;
var windAngle;

function WindArrow() {

	wind = createVector();
	position = createVector(width/2, height/2);

	this.show = function() {
		push();
		translate(32, height - 32);
		// Rotate by the wind's angle
		rotate(wind.heading() + PI/2);
		noStroke();
		fill(255);
		ellipse(0, 0, 48, 48);

		stroke(45, 123, 182);
		strokeWeight(3);
		line(0, -16, 0, 16);

		noStroke();
		fill(45, 123, 182);
		triangle(0, -18, -6, -10, 6, -10);
		
		pop();

		push();
		translate(64, height - 28);
		noStroke();
		fill(255);
		text(windSpeed+'m/sec', 0, 0);
		pop();
	}

	this.updateWind = function() { 
		  // Få fat i vinkel og konverter til radians
		  var angle = radians(Number(windAngle));
		  wind = p5.Vector.fromAngle(angle);
	}

}