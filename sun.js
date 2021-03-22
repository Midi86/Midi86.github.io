var sunRadius = 100;
var numberOfSunrays = 28;

function Sun() {

	this.sunVector = createVector(480, 100);

    this.show = function() {
    	rectMode(CENTER);
    	stroke(255, 170, 0);
    	strokeWeight(3);
		fill(255, 170, 0);

        push();
        translate(300, 150);

    	ellipse(0, 0, sunRadius, sunRadius);
        pop();


    //Flyt canvas centerpunkt til midten af figuren
    translate(300, 150);
    rotate(frameCount / -120.0);
    //Tegn en lige streg og roter skærmen for hver streg.
    //Vi beregner vinklen for rotationen afhængig af antal streger.
    for (var i = 0; i < numberOfSunrays; i++) {
        push();
        rotate(TWO_PI * i / numberOfSunrays);
        if(i%2 == 0) {
            line(80, 0, -80, 0);
        } else {
            line(70, 0, -70, 0);
        }
   
        pop();
    }
    
    }
}