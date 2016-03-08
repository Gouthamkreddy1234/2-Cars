/*
 * Javascript file for 2 cars
 */

// Constants
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var BACKGROUND_COLOR = "#25337a";
var LINE_COLOR = "#6572a7";
var RED_CAR = new Image();
RED_CAR.src = "../img/redcar.png";
var BLUE_CAR = new Image();
BLUE_CAR.src = "../img/bluecar.png";

window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    canvas.style.backgroundColor = BACKGROUND_COLOR;
    ctx.fillStyle = LINE_COLOR;
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 5, 0, 5, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) + 100, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) - 200, 0, 2, WINDOW_HEIGHT);
    ctx.fillRect(Math.floor(WINDOW_WIDTH/2) + 200, 0, 2, WINDOW_HEIGHT);


    /*var redcar = document.getElementById("red-car");
    ctx.drawImage(redcar, Math.floor(WINDOW_WIDTH/2) - 180 , Math.floor(WINDOW_HEIGHT) - 180);
    var bluecar = document.getElementById("blue-car");
    ctx.drawImage(bluecar, Math.floor(WINDOW_WIDTH/2) + 120 , Math.floor(WINDOW_HEIGHT) - 180);*/

    /*sdsadsadsasds*/
};