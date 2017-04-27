var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
}
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    gameLoop();
};
