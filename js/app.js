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
            var that1 = this;
            for(var i=1; i<=20; i++) {
                setTimeout(function () {
                    that1.x += 5;
                }, 5*i);
            }
        } else {
            var that2 = this;
            this.position = "left";
            for(var j=1; j<=20; j++) {
                setTimeout(function () {
                    that2.x -= 5;
                }, 5*j);
            }
        }
    };
}

// Instantiations
var RED_CAR_OBJ = new Car("red");
var BLUE_CAR_OBJ = new Car("blue");

// Keyboard Handlers
document.addEventListener("keyup", function (e) {
    if(e.keyCode == 90) {
        RED_CAR_OBJ.update();
    } else if(e.keyCode == 77) {
        BLUE_CAR_OBJ.update();
    }
}, false);

// Obstacles constants
var RED_OBSTACLES = [];
var BLUE_OBSTACLES = [];
var RED_OBSTACLES_INTERVAL_ID;
var BLUE_OBSTACLES_INTERVAL_ID;

function Obstacle(color) {
    this.type = Math.floor((Math.random()*2)) ? "circle" : "square";
    this.position = Math.floor((Math.random()*2)) ? "left" : "right";
    if(this.type == "circle") {
        this.x = Math.floor(WINDOW_WIDTH/2) - 150;
        if(this.position == "right") {
            this.x += 100;
        }
        if(color == "blue") {
            this.x += 200;
        }
    } else if(this.type == "square") {
        this.x = Math.floor(WINDOW_WIDTH/2) - 162.5;
        if(this.position == "right") {
            this.x += 100;
        }
        if(color == "blue") {
            this.x += 200;
        }
    }
    this.y = -100;
    if(color == "red") {
        this.color = "#FE3E67";
    } else if(color == "blue") {
        this.color = "#05A8C4";
    }

    this.draw = function () {
        if(this.type == "circle") {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 25, 0, 2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, 25*0.8, 0, 2*Math.PI);
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, 25*0.5, 0, 2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        } else {
            ctx.lineJoin = "round";
            ctx.lineWidth = 20;
            ctx.strokeStyle = this.color;
            ctx.strokeRect(this.x, this.y, 25, 25);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 25, 25);

            ctx.lineWidth = 10;
            ctx.strokeStyle = "#ffffff";
            ctx.strokeRect(this.x + 1, this.y + 1, 25 - 1.5, 25 - 1.5);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(this.x + 1, this.y + 1, 25 - 1.5, 25 - 1.5);

            ctx.fillStyle = this.color;
            ctx.fillRect(this.x + 3, this.y + 3, 25 - 6, 25 - 6);
        }
    };

    this.update = function () {
        this.y += 10;
    }
}

function obstaclesGenerator() {
    RED_OBSTACLES_INTERVAL_ID = setInterval(function () {
        var obstacle = new Obstacle("red");
        RED_OBSTACLES.push(obstacle);
    }, 1000);
    BLUE_OBSTACLES_INTERVAL_ID = setInterval(function () {
        var obstacle = new Obstacle("blue");
        BLUE_OBSTACLES.push(obstacle);
    }, 1000);
}

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
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 2.5, 0, 5, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) + 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 200, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) + 200, 0, 2, WINDOW_HEIGHT);
}

function drawCars() {
    RED_CAR_OBJ.draw();
    BLUE_CAR_OBJ.draw();
}

function drawObstacles() {
    RED_OBSTACLES.forEach(function (obstacle) {
        obstacle.update();
        obstacle.draw();
    });
    BLUE_OBSTACLES.forEach(function (obstacle) {
        obstacle.update();
        obstacle.draw();
    })
}

function draw() {
    clearCanvas();
    drawLanes();
    drawCars();
    drawObstacles();
}

var i= 0,j=0;
function startTimer() {
    i++;
  var curr= document.getElementById("time");
    if(j<1)
    {
        if(i<10)
            curr.innerHTML="00:0"+i;
        else {
            if (i > 59) {
                j++;
                i=0;
                curr.innerHTML = "0"+j+":" + "0"+i;
            }
            else
            {
            curr.innerHTML = "0"+j+":" + i;
            }
        }
    }
    else
    {
        if(i<10)
        curr.innerHTML="0"+j+":0"+i;
        else {
            if (i > 59) {
                j++;
                i=0;
                curr.innerHTML = "0"+j+":" + "0"+i;
            }
            else
            {
                curr.innerHTML = "0"+j+":" + i;
            }
        }

    }

}

function start() {
    obstaclesGenerator();
    INTERVAL_ID = setInterval(draw, 1000/FPS);
    setInterval(startTimer,1000);
}

function stop() {
    clearInterval(INTERVAL_ID);
}

window.onload = function () {
    start();
};