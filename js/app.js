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

function drawObstacles()
{

    var radius = 25;
    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) - 150,Math.floor(WINDOW_HEIGHT) - 360,radius,0,2*Math.PI);
    ctx.fillStyle = '#FE3E67';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) - 150,Math.floor(WINDOW_HEIGHT) - 360,radius*0.8, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();//GO

    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) - 150,Math.floor(WINDOW_HEIGHT) - 360,radius*0.50, 0, 2*Math.PI);
    ctx.fillStyle = '#FE3E67';
    ctx.fill();


    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) + 150,Math.floor(WINDOW_HEIGHT) - 560,radius,0,2*Math.PI);
    ctx.fillStyle = '#05A8C4';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) + 150,Math.floor(WINDOW_HEIGHT) - 560,radius*0.8, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();//GO

    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) + 150,Math.floor(WINDOW_HEIGHT) - 560,radius*0.50, 0, 2*Math.PI);
    ctx.fillStyle = '#05A8C4';
    ctx.fill();


    //red rect
    ctx.lineJoin = "round";
    ctx.lineWidth = 20;
    ctx.strokeStyle="#FE3E67";

    var xrect=(Math.floor(WINDOW_WIDTH / 2) - 162.5);
    var yrect=59;
    var size=25;

    // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
    ctx.strokeRect(xrect, yrect, size,size);
    ctx.fillStyle="#FE3E67";
    ctx.fillRect(xrect,yrect, size,size);


    ctx.lineWidth = 10;
    ctx.strokeStyle="white";
    // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
    ctx.strokeRect(xrect+1, yrect+1, size-1.5,size-1.5);
    ctx.fillStyle="white";
    ctx.fillRect(xrect+1, yrect+1, size-1.5, size-1.5);

    ctx.fillStyle="#FE3E67";
    ctx.fillRect(xrect+3, yrect+3, size-6, size-6);

    //blue rect
    ctx.lineJoin = "round";
    ctx.lineWidth = 20;
    ctx.strokeStyle="#05A8C4";

    xrect=(Math.floor(WINDOW_WIDTH / 2) +137.5);
    yrect=360;
    size=25;

    // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
    ctx.strokeRect(xrect, yrect, size,size);
    ctx.fillStyle="#05A8C4";
    ctx.fillRect(xrect,yrect, size,size);


    ctx.lineWidth = 10;
    ctx.strokeStyle="white";
    // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
    ctx.strokeRect(xrect+1, yrect+1, size-1.5,size-1.5);
    ctx.fillStyle="white";
    ctx.fillRect(xrect+1, yrect+1, size-1.5, size-1.5);

    ctx.fillStyle="#05A8C4";
    ctx.fillRect(xrect+3, yrect+3, size-6, size-6);
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
    INTERVAL_ID = setInterval(draw, 1000/FPS);
    setInterval(startTimer,1000);
}

function stop() {
    clearInterval(INTERVAL_ID);
}

window.onload = function () {
    start();
};