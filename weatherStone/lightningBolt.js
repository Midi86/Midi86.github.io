var numberOfForks = 1;

function LightningBolt(x0I, y0I, width0, theta0, jumpMin, jumpMax, inputColor) {
    this.lineWidth0 = width0;
    this.lineWidth = width0;
    this.theta = theta0;
    this.x0 = x0I;
    this.y0 = y0I;
    this.x1 = x0I;
    this.y1 = y0I;
    this.x2 = x0I;
    this.y2 = y0I;
    this.straightJumpMin = jumpMin;
    this.straightJumpMax = jumpMax;
    this.myColor = inputColor;


    this.straightJump = random(this.straightJumpMin,this.straightJumpMax);
    this.maxDTheta = parseFloat(PI/10);
    this.minDTheta = parseFloat(PI/20);
    this.maxTheta = parseFloat(PI/2);

    this.oddsForFork = .01;
    this.maxForks = 5;

    //Vi opretter en linie som kører lige ud et stykke tid,
    //så laver den et hop (DTheta) og gentager det hele.
    //Den vil aldrig sigte højere end maxTheta
    //(theta = 0 er lige med ned)
  this.show = function() {
    while(this.y2<height && (this.x2>0 && this.x2<width))
    {
      strokeWeight(1);
      
      this.theta += randomSign()*random(this.minDTheta, this.maxDTheta);
      if(this.theta>this.maxTheta) {
        this.theta = this.maxTheta;
      }

      if(this.theta<-this.maxTheta) {
        this.theta = -this.maxTheta;
      }
        
      this.straightJump = random(this.straightJumpMin,this.straightJumpMax);
      this.x2 = this.x1-this.straightJump*cos(this.theta-HALF_PI);
      this.y2 = this.y1-this.straightJump*sin(this.theta-HALF_PI);
      
      this.lineWidth = map(this.y2, height, this.y0, 1, this.lineWidth0);
      if(this.lineWidth<0) {
        this.lineWidth = 0;
      }

      stroke(this.myColor);
      strokeWeight(this.lineWidth);
      line(this.x1, this.y1, this.x2, this.y2);
      this.x1=this.x2;
      this.y1=this.y2;
      
      //10% for at lave en fork, hvis true laver vi en ny fork!
      if(random(0,1)<this.oddsForFork) {//yes, vi har en vinder!

        this.newTheta = this.theta;
        this.newTheta += randomSign()*random(this.minDTheta, this.maxDTheta);
        if(this.theta>this.maxTheta) {
          this.theta = this.maxTheta;
        }

        if(this.theta<-this.maxTheta) {
          this.theta = -this.maxTheta;
        }
        numberOfForks++;
        
        //Forhindrer en uendelig løkke
        if(numberOfForks > this.maxForks) {
          numberOfForks = 0;
          return;
        }

        (new LightningBolt(this.x2, this.y2, this.lineWidth, this.newTheta, this.straightJumpMin, this.straightJumpMax, this.myColor)).show();

      }
    }
  }
}

function randomSign() {
  return (Math.random() > 0.5) ? 1 : -1;
}



function createThunderStorm() {
    drawRain();
    var minBoltWidth = 3;
    var maxBoltWidth = 10;
    var minJumpLength = 1;
    var maxJumpLength = 10;
    var boltColor = color(125,249,255);
    //Lyn hver ca 2. sekund
    if(frameCount%100 == 0){
        new LightningBolt(random(0,width),0,random(minBoltWidth,maxBoltWidth),0,minJumpLength,maxJumpLength,boltColor).show();
    }
        
}