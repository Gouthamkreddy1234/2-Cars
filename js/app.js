/*
 * Javascript file for 2 cars
 */

// Basic Constants
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var FPS = 30;
var INTERVAL_ID;
var BACKGROUND_COLOR = "#25337a";
var LINE_COLOR = "#6572a7";

// Car Constants
var RED_CAR = new Image();
RED_CAR.src = "img/redcar.png";

var BLUE_CAR = new Image();
BLUE_CAR.src = "img/bluecar.png";

// Constructor function for car
function Car(type) {
    if(type == "red") {
        this.type = "RED_CAR";
        this.imgObj = RED_CAR;
        this.position = "left";
        this.x = Math.floor(WINDOW_WIDTH/2) - 180;
        this.y = Math.floor(WINDOW_HEIGHT) - 180;
    } else if(type == "blue") {
        this.type = "BLUE_CAR";
        this.imgObj = BLUE_CAR;
        this.position = "right";
        this.x = Math.floor(WINDOW_WIDTH/2) + 120;
        this.y = Math.floor(WINDOW_HEIGHT) - 180;
    }

    this.draw = function () {
        ctx.drawImage(this.imgObj, this.x, this.y);
    };

    this.update = function () {
        if(this.position == "left") {
            this.position = "right";
            this.x += 100;
        } else {
            this.position = "left";
            this.x -= 100;
        }
    };
}

// Instantiations
var RED_CAR_OBJ = new Car("red");
var BLUE_CAR_OBJ = new Car("blue");

// Keyboard Handlers
document.addEventListener("keydown", function (e) {
    if(e.keyCode == 90) {
        RED_CAR_OBJ.update();
    } else if(e.keyCode == 77) {
        BLUE_CAR_OBJ.update();
    }
}, false);

// Canvas constants
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
canvas.style.backgroundColor = BACKGROUND_COLOR;

function clearCanvas() {
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
}

function drawLanes() {
    ctx.fillStyle = LINE_COLOR;
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 5, 0, 5, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) + 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 200, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) + 200, 0, 2, WINDOW_HEIGHT);
}

function drawCars() {
    RED_CAR_OBJ.draw();
    BLUE_CAR_OBJ.draw();
}

function draw() {
    clearCanvas();
    drawLanes();
    drawCars();
}

function start() {
    INTERVAL_ID = setInterval(draw, 1000/FPS);
}

function stop() {
    clearInterval(INTERVAL_ID);
}

window.onload = function () {
    start();
};