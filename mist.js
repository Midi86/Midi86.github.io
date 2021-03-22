var inc = 0.005;
var countUp = true;

function countUpAndDown() {
    if(countUp) {
        inc = inc + 0.00001;
    } else {
        inc = inc - 0.00001;
    }

    if (inc>=0.01) { countUp = false; }
    if (inc<=0.005) { countUp = true; }
}

function drawFog() {
  loadPixels();
   for (var y = 0; y < height; y++) {
     for (var x = 0; x < width; x++) {
       var index = (x + y * width) * 4;
       var r = noise(x*inc, y*inc) * 255;
       pixels[index + 0] = r;
       pixels[index + 1] = r;
       pixels[index + 2] = r;
       pixels[index + 3] = 255;
   }
 }
 updatePixels();
 //Simuler animation ved at ændre noice intencitet
 countUpAndDown();
}