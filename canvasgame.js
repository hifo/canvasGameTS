var canvas;
var ctx;
var cCircle = (function () {
    function cCircle(x, y, radius, color, line_width) {
        if (color === void 0) { color = "red"; }
        if (line_width === void 0) { line_width = 2; }
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    return cCircle;
}());
var circle1 = new cCircle(200, 300, 50);
var circle2 = new cCircle(400, 550, 150, "blue", 5);
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    circle1.draw();
    circle2.draw();
}
window.onload = function () {
    canvas = document.getElementById('screen');
    ctx = canvas.getContext("2d");
    gameLoop();
};
