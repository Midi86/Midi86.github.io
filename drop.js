    var drops = [];

    function Drop(zIndex) {
        //Start position for dråberne
        this.x = random(width);
        this.y = random(-550, -50);
        this.z = zIndex;
        //Fald-hastiged og størelsen af dråberne relativ til z position, så ddråberne er større og falder hurtiegere destp tættere de er på skærmen
        this.yspeed = map(this.z, 0, 20, 2, 6);
        this.dropLength = map(this.z, 0, 20, 5, 12);

        this.fall = function() {
        	//fald-hastigig increase, hurtigere destå længere ned de er (gravity FTW:))
            this.y = this.y + this.yspeed;
            this.gravity = map(this.z, 0, 20, 0, 0.2);
            this.yspeed = this.yspeed + this.gravity;

            //start fra toppen igen
            if (this.y > height) {
            	this.y = random(-550, -50);
            	this.yspeed = map(this.z, 0, 20, 2, 6);
            }
        }

        this.show = function() {
            //Tykkere dråbere hvis de er tæt på skærmnen
        	this.thick = map(this.z, 0, 20, 1, 3);
        	strokeWeight(this.thick);
            stroke(0, 0, 255);
            line(this.x, this.y, this.x, this.y+this.dropLength);
        }
    };

    function createRainDrops() {
            //Opret 500 regndråber. De benytter en vægtet tilfældighed, som gør at der kommer mange flere i baggrunden end i forgrunden.
        var weight = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.5];
        var zIndex = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        var weighedList = generateWeighedList(zIndex, weight);

        for (var i=0; i<weighedList.length; i++) {
            drops.push(new Drop(weighedList[i]));
        }
    }

    var generateWeighedList = function(list, weight) {
        var weighed_list = [];

            // Loop over vægt
        for (var i = 0; i < weight.length; i++) {
            var multiples = weight[i] * 100;

                // Loop over items
            for (var j = 0; j < multiples; j++) {
                weighed_list.push(list[i]);
            }
        }

        return weighed_list;
    };

    function drawRain() {
        for (var i=0; i<drops.length; i++) {
            drops[i].fall();
            drops[i].show();
        }
    }