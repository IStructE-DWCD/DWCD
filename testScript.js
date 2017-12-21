function setup() {
	//setup code goes in here
	alert("Whats up famalam?!");
	//framerate(30);
	canvasHeight = 500;
	canvasWidth = 500;
	createCanvas(canvasHeight, canvasWidth);
}

function draw() {
	//drawing code goes here
	//var fr = framerate();
	//print(fr);
	if(mouseIsPressed){
		stroke(0);
	} 
	else {
		stroke(244, 206, 255);
	}
			
	line(mouseX, mouseY, canvasHeight/2, canvasWidth/2);
}