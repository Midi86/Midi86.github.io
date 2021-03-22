  var particles = [];
  var maxCloudParticles = 1000;
  var clouds = [];

  function Cloud(x, y, wth, c, o) { 
    this.position = createVector(x, y);
    this.w = wth;
    this.clr = c;
    this.oppacity = o;
    this.screenoffset = 25;

    this.drawCloud = function() {
      noStroke();
      fill(this.clr, this.oppacity);
      ellipse(this.position.x, this.position.y, this.w, this.w);
    }

    //Multiplicer skyerne
    this.reproduce = function() {
      if(this.w > 1) {
        for(var i = 0; i < 50; i++) {
          this.newX = this.position.x + random(-this.w, this.w);
          this.newY = this.position.y + random(-this.w/2, this.w/4);
          this.r = random(50);
          this.newW = this.w - this.r;
          if(this.newW < 1) {
            this.newW = 1;
          }

          particles.push(new Cloud(this.newX, this.newY, this.newW, this.clr, this.oppacity));
        }
      }
    }

    this.move = function() {
      for(var i = 0; i < particles.length; i++) {
          particles[i].position.x = particles[i].position.x + wind.x;
          particles[i].position.y = particles[i].position.y + wind.y;
          //Reset når de flyver udenfor skærmen
        if (particles[i].position.x > width+this.screenoffset) {  
          particles[i].position.x = -this.screenoffset;
        }
        if (particles[i].position.x < 0-this.screenoffset)  {     
          particles[i].position.x = width+this.screenoffset;
        }
        if (particles[i].position.y > height+this.screenoffset) { 
          particles[i].position.y = -this.screenoffset;
        }
        if (particles[i].position.y < 0-this.screenoffset)  {     
          particles[i].position.y = height+this.screenoffset;
        }
      };
    }
  }

function createClouds() {
    clouds.push(new Cloud(random(-100, width), 150, 40, color(255), 12));
    clouds.push(new Cloud(random(-100,width), 110, 50, color(255), 12));
    clouds.push(new Cloud(random(-100,width), 75, 60, color(255), 12));
    clouds.push(new Cloud(random(-100,width), 200, 60, color(255), 12));

    for(var i = 0; i < clouds.length; i++) {
        clouds[i].reproduce();
    }
}

  function drawClouds() {
    for(var i = 0; i < particles.length; i++) {
        particles[i].drawCloud();
    }

    for(var i = 0; i < clouds.length; i++) {
        clouds[i].move();
    }
}