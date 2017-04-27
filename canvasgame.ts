// canvasGameTS - a TypeScript library to aid in writing games in HTML5

// Game Constants
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

//Utility Function

//End Util Functions

//gameObject
class gameObject{
      scale: number;
      image: string;
      x: number;
      y: number;
      constructor(theScale: number, theImage: string, theX: number, theY: number){
      			    this.scale = theScale;
			    this.image = theImage;
			    this.x = theX;
			    this.y = theY;
			    }
}

function gameLoop(){
	 requestAnimationFrame(gameLoop);
	 ctx.fillStyle = "black";
	 ctx.fillRect(0,0,1280,720);

	 }

window.onload = () => {
	      canvas = <HTMLCanvasElement>document.getElementById('screen');
	      ctx = canvas.getContext("2d");
	      gameLoop();
	      }