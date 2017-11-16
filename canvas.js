//this var = canvas is to call the canvas tag from html file using querySelector
var canvas=document.querySelector('canvas');
//this makes the width of the canvas the full width the screen
canvas.width = window.innerWidth;
//this makes the height of the canvas the full height the screen
canvas.height=window.innerHeight;
// this var = c is to call var canvas to start to work on it 
var c=canvas.getContext("2d");


var mouse = {
	x:undefined,
	y:undefined
}

var maxRadius = 40;
var colorArray=[
	'#FF595E',
	'#33032F',
	'#313E50',
	'#0E7C7B',
	'#87BCDE',
];
window.addEventListener('mousemove',
	function(event){
		mouse.x=event.x;
		mouse.y=event.y;
})

window.addEventListener('resize',function()
{
	//this makes the width of the canvas the full width the screen
	canvas.width = window.innerWidth;
//this makes the height of the canvas the full height the screen
	canvas.height=window.innerHeight;

	init();	
})
function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx= dx;
	this.dy= dy;
	this.radius=radius;
	this.minRadius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw = function()
	{
    
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
		c.fillStyle=this.color;
		c.strokeStyle=this.color;
		c.fill();
	}
	this.update = function(){
		if (this.x + this.radius> innerWidth || this.x-this.radius < 0 ) {
	this.dx = -this.dx ;
}

if (this.y + this.radius> innerHeight || this.y-this.radius < 0 ) {
	this.dy = -this.dy ;
}
	this.x += this.dx;
	this.y += this.dy;

	//interactivity
	if (mouse.x - this.x <50 && mouse.x-this.x>-50 && mouse.y - this.y <50 && mouse.y-this.y>-50 ) {
		if (this.radius<maxRadius) {
			this.radius+= 1;
		}
		
	} else if (this.radius>this.minRadius) {
		this.radius-= 1;
	}
	this.draw();
	}
}


var circleArray=[];
	for (var i = 0; i < 500; i++)
 {
 	var radius=Math.random() * 3 + 1;
    var x =Math.random()*innerWidth;
	var y = Math.random()*innerHeight;
	var dx= (Math.random() - 0.5)*16;
	var dy= (Math.random() - 0.5)*16;
	

 	circleArray.push(new Circle(x,y,dx,dy,radius));

}

function init()
{
 circleArray=[];

}


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

for (var i = 0; i < circleArray.length; i++) 
{
	circleArray[i].update();
}

}

animate();