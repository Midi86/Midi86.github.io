var snowflakes = [];

function Snow() {
	//Start position for dråberne
    this.x = random(width);
    this.y = random(-550, -50);
	this.z = random(0, 20);
	this.fallSpeed = map(this.z, 0, 20, 2, 6);
	this.snowflakeSize = map(this.z, 0, 20, 1, 5);
	this.direction = random(-1, 1);

	this.fall = function() {
        this.y = this.y + this.fallSpeed;
        this.x = this.x + this.direction;

        //start fra toppen igen
        if (this.y > height) {
        	this.y = random(-150, -50);
        	this.fallSpeed = map(this.z, 0, 20, 2, 6);
        	//Sørg få at flagerne kommer ind på skærmen igen, hvis de falder udenfor i en af siderne
        	this.x = random(width);
        	
        }

    }

    this.show = function() {
        stroke(255);
        ellipse(this.x, this.y, this.snowflakeSize, this.snowflakeSize);
    }
}


function createSnowflakes() {
    for (var i=0; i<500; i++) {
        snowflakes.push(new Snow);
    }
}


function drawSnow () {
    for (var i=0; i<snowflakes.length; i++) {
        snowflakes[i].fall();
        snowflakes[i].show();
    }
}
