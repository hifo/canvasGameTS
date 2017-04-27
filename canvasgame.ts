var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

function gameLoop(){
	 requestAnimationFrame(gameLoop);
	 }

window.onload = () => {
	      canvas = <HTMLCanvasElement>document.getElementById('cnvs');
	      ctx = canvas.getContext("2d");
	      gameLoop();
	      }