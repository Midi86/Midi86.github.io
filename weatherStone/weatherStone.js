var bgColor;
var weather;
var openweatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=53ad3f4ebe44c523ed92bfc6fc5111aa';
var unitsType = '&units=metric';
var cityInputField;
var currentWeatherCondition;
var liveWeather;
var simulatedWeather;
var temperatureText;
var simulatedRadioButtons;
var sun;
var windArrow;


function setup() {
    var canvas = createCanvas(600, 300);
    canvas.parent('sketch-holder');
    textSize(16);

    var button = select('#submit');
    button.mousePressed(refreshSelectedCity);
    cityInputField = select('#city');
    simulatedRadioButtons = document.getElementsByName('weatherSelect');

    //Opret vejr objekter
    windArrow = new WindArrow();
    sun = new Sun();
    createClouds();
    createRainDrops();
    createSnowflakes();

    handleLiveOrSimulated();
    addRadioClickListeners();
}

function refreshSelectedCity() {
	var completeApiUrl = openweatherApi + cityInputField.value() + apiKey + unitsType;
	loadJSON(completeApiUrl, gotData);
}

function gotData(data) {
    weather = data;
    liveWeather = weather.weather[0].main;
    temperatureText = weather.main.temp;
      
    setLiveDataSource();

    document.getElementById("tempValue").textContent = Math.round(temperatureText) + '\xB0';
    document.getElementById("conditionValue").textContent = currentWeatherCondition+'';
}

function handleLiveOrSimulated() {
    liveOrSimulatedRadios = document.getElementsByName('liveOrSimulated');

    for(var i = 0; i < liveOrSimulatedRadios.length; i++){
        if(liveOrSimulatedRadios[i].checked){
            //init
            refreshSelectedCity();
            if(liveOrSimulatedRadios[i].value == 'livedata') {
                liveOrSimulatedRadios[i].onclick = function() {
                    //skift til live ved click
                    refreshSelectedCity();
                    clearSimulatedRadioSelection();
                }
            } else {
                setSimulatedDataSource();

            }
        }
    }
}

function setLiveDataSource() {
    currentWeatherCondition = liveWeather;
    windSpeed = weather.wind.speed;
    windAngle = weather.wind.deg;
}

function setSimulatedDataSource() {
    currentWeatherCondition = simulatedWeather;
    windSpeed = Math.round(random(5));
    windAngle = select('#windAngldeInput').value();
}

function addRadioClickListeners() {
    for(var i = 0; i < simulatedRadioButtons.length; i++) {
        simulatedRadioButtons[i].onclick = function() {
            if(this.checked) {
                simulatedWeather = this.value;
                setSimulatedDataSource();
            }
        };
    }
}

function clearSimulatedRadioSelection() {
   for(var i = 0; i < simulatedRadioButtons.length; i++) {
        simulatedRadioButtons[i].checked = false;
    }
}

function updateWindData() {}


//kaldes automatisk af p5js frameworket (default er 50/sek)
function draw() {
    background(50);

    if(weather) {
        windArrow.updateWind()
        windArrow.show();

        switch(currentWeatherCondition) {
            case 'Rain':
            case 'Drizzle':
                drawRain();
                break;
            case 'Thunderstorm':
                createThunderStorm();
                break;
            case 'Clouds':
                drawClouds();
                break;
            case 'Snow':
                drawSnow();
                break;
            case 'Clear':
                sun.show();
                break;
            case 'Mist':
                drawFog();
                break;
            default:
                sun.show();
        }
    }
}





