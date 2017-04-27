// canvasGameTS - a TypeScript library to aid in writing games in HTML5
// Game Constants
var canvas;
var ctx;
//Utility Function
//End Util Functions
//gameObject
var gameObject = (function () {
    function gameObject(theScale, theImage, theX, theY) {
        this.scale = theScale;
        this.image = theImage;
        this.x = theX;
        this.y = theY;
    }
    return gameObject;
}());
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
}
window.onload = function () {
    canvas = document.getElementById('screen');
    ctx = canvas.getContext("2d");
    gameLoop();
};
