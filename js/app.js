/*
 * Javascript file for 2 cars
 */

// Constants
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var BACKGROUND_COLOR = "#25337a";
var LINE_COLOR = "#6572a7";
var RED_CAR = new Image();
RED_CAR.src = "img/redcar.png";
var BLUE_CAR = new Image();
BLUE_CAR.src = "img/bluecar.png";
var radius = 25;

window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    canvas.style.backgroundColor = BACKGROUND_COLOR;
    ctx.fillStyle = LINE_COLOR;
    ctx.fillRect(Math.floor(WINDOW_WIDTH / 2) - 5, 0, 5, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH / 2) - 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH / 2) + 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH / 2) - 200, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH / 2) + 200, 0, 2, WINDOW_HEIGHT);

    ctx.drawImage(RED_CAR, Math.floor(WINDOW_WIDTH / 2) - 180, Math.floor(WINDOW_HEIGHT) - 180);
    ctx.drawImage(BLUE_CAR, Math.floor(WINDOW_WIDTH / 2) + 120, Math.floor(WINDOW_HEIGHT) - 180);

    ctx.beginPath();
    ctx.arc(Math.floor(WINDOW_WIDTH / 2) - 150,Math.floor(WINDOW_HEIGHT) - 360,radius,0,2*Math.PI);
    ctx.stroke();
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
    ctx.stroke();
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

    var xrect=523;
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

     xrect=820;
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