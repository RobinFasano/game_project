/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var canyon;

// interaction variables
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	canyon = {x_pos: 300, width: 100};

	//initialize variables as false
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	fill(100,155,255);
	rect(canyon.x_pos, floorPos_y, canyon.width, 144);

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		//ear back
		fill(222, 184, 135);
		ellipse(gameChar_x - 5, gameChar_y - 58, 9);
		//background foot angled
		fill(0);
		push();
		translate(gameChar_x + 10,gameChar_y - 5);
		rotate(HALF_PI / -4.0);
		ellipse(0, 0, 11, 18);
		pop();
		//background arm
		push();
		translate(gameChar_x - 16,gameChar_y - 32);
		rotate(PI / -4.0);
		ellipse(0, 0, 10, 16);
		pop();
		//body
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 20, 32, 42);
		fill(245, 222, 179);
		ellipse(gameChar_x - 11, gameChar_y - 20, 10, 20);
		//head
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 43, 28, 30);
		//ear front
		ellipse(gameChar_x + 6, gameChar_y - 57, 12);
		fill(245, 222, 179);
		ellipse(gameChar_x + 6, gameChar_y - 57, 7);
		//nose
		fill(245, 222, 179);
		ellipse(gameChar_x - 12, gameChar_y - 42, 12, 10);
		fill(0);
		ellipse(gameChar_x - 16, gameChar_y - 44, 5);
		//eyes
		fill(0);
		ellipse(gameChar_x - 5, gameChar_y - 50, 5);
		//foreground foot angled
		push();
		translate(gameChar_x - 10,gameChar_y - 10);
		rotate(QUARTER_PI / - 1.0);
		ellipse(0, 0, 11, 18);
		pop();
		//foreground arm
		push();
		translate(gameChar_x + 3,gameChar_y - 34);
		rotate(PI / - 4.0);
		ellipse(0,0, 10, 13);
		pop();
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		//ear back
		fill(222, 184, 135);
		ellipse(gameChar_x + 5, gameChar_y - 58, 9);
		//background foot angled
		fill(0);
		push();
		translate(gameChar_x - 10,gameChar_y - 5);
		rotate(HALF_PI / 4.0);
		ellipse(0, 0, 11, 18);
		pop();
		fill(0);
		//background arm
		push();
		translate(gameChar_x + 16,gameChar_y - 32);
		rotate(PI / + 4.0);
		ellipse(0, 0, 10, 16);
		pop();
		//body
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 20, 32, 42);
		fill(245, 222, 179);
		ellipse(gameChar_x + 11, gameChar_y - 20, 10, 20);
		//head
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 43, 28, 30);
		//ear front
		ellipse(gameChar_x - 6, gameChar_y - 57, 12);
		fill(245, 222, 179);
		ellipse(gameChar_x - 6, gameChar_y - 57, 7);
		//nose
		fill(245, 222, 179);
		ellipse(gameChar_x + 12, gameChar_y - 42, 12, 10);
		fill(0);
		ellipse(gameChar_x + 16, gameChar_y - 44, 5);
		//eye
		fill(0);
		ellipse(gameChar_x + 5, gameChar_y - 50, 5);
		//foreground foot angled
		push();
		translate(gameChar_x + 10,gameChar_y - 10);
		rotate(QUARTER_PI / 1.0);
		ellipse(0, 0, 11, 18);
		pop();
		//foreground arm
		push();
		translate(gameChar_x - 3,gameChar_y - 34);
		rotate(PI / 4.0);
		ellipse(0,0, 10, 13);
		pop();
	}
	else if(isLeft)
	{
		// add your walking left code
		//ear back
		fill(222, 184, 135);
		ellipse(gameChar_x - 5, gameChar_y - 58, 9);
		//background foot angled
		fill(0);
		push();
		translate(gameChar_x - 12,gameChar_y - 5);
		rotate(HALF_PI / 4.0);
		ellipse(0, 0, 11, 18);
		pop();
		//background arm
		push();
		translate(gameChar_x - 15,gameChar_y - 28);
		rotate(PI / 4.0);
		ellipse(0, 0, 10, 16);
		pop();
		//body
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 20, 32, 42);
		fill(245, 222, 179);
		ellipse(gameChar_x - 11, gameChar_y - 20, 10, 20);
		//head
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 43, 28, 30);
		//ear front
		ellipse(gameChar_x + 6, gameChar_y - 57, 12);
		fill(245, 222, 179);
		ellipse(gameChar_x + 6, gameChar_y - 57, 7);
		//nose
		fill(245, 222, 179);
		ellipse(gameChar_x - 12, gameChar_y - 42, 12, 10);
		fill(0);
		ellipse(gameChar_x - 16, gameChar_y - 44, 5);
		//eyes
		fill(0);
		ellipse(gameChar_x - 5, gameChar_y - 50, 5);
		//foreground foot angled
		push();
		translate(gameChar_x + 8,gameChar_y - 5);
		rotate(QUARTER_PI / -1.5);
		ellipse(0,0, 11, 18);
		pop();
		//foreground arm
		push();
		translate(gameChar_x + 4,gameChar_y - 28);
		rotate(HALF_PI / 4.0);
		ellipse(0,0, 10, 13);
		pop();
	}
	else if(isRight)
	{
		// add your walking right code
		//ear back
		fill(222, 184, 135);
		ellipse(gameChar_x + 5, gameChar_y - 58, 9);
		//background foot angled
		fill(0);
		push();
		translate(gameChar_x + 12,gameChar_y - 5);
		rotate(QUARTER_PI / -1.5);
		ellipse(0, 0, 11, 18);
		pop();
		//background arm
		push();
		translate(gameChar_x + 15,gameChar_y - 28);
		rotate(PI / -4.0);
		ellipse(0, 0, 10, 16);
		pop();
		//body
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 20, 32, 42);
		fill(245, 222, 179);
		ellipse(gameChar_x + 11, gameChar_y - 20, 10, 20);
		//head
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 43, 28, 30);
		//ear front
		ellipse(gameChar_x - 6, gameChar_y - 57, 12);
		fill(245, 222, 179);
		ellipse(gameChar_x - 6, gameChar_y - 57, 7);
		//nose
		fill(245, 222, 179);
		ellipse(gameChar_x + 12, gameChar_y - 42, 12, 10);
		fill(0);
		ellipse(gameChar_x + 16, gameChar_y - 44, 5);
		//eye
		fill(0);
		ellipse(gameChar_x + 5, gameChar_y - 50, 5);
		//foreground foot angled
		push();
		translate(gameChar_x - 8,gameChar_y - 5);
		rotate(HALF_PI / 4.0);
		ellipse(0, 0, 11, 18);
		pop();
		//foreground arm
		push();
		translate(gameChar_x - 4,gameChar_y - 28);
		rotate(QUARTER_PI / -1.5);
		ellipse(0, 0, 10, 13);
		pop();
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		//ears
		fill(222, 184, 135);
		ellipse(gameChar_x - 10, gameChar_y - 44, 12);
		ellipse(gameChar_x + 10, gameChar_y - 44, 12);
		fill(245, 222, 179);
		ellipse(gameChar_x - 10, gameChar_y - 44, 7);
		ellipse(gameChar_x + 10, gameChar_y - 44, 7);
		//body
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 10, 42, 25);
		fill(245, 222, 179);
		ellipse(gameChar_x, gameChar_y - 10, 30, 18);
		fill(0);
		stroke(0.2);
		//head
		noStroke();
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 30, 30);
		//nose
		fill(245, 222, 179);
		ellipse(gameChar_x, gameChar_y - 24, 14, 12);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 26, 5);
		//eyes
		fill(0);
		ellipse(gameChar_x - 5, gameChar_y - 34, 5);
		ellipse(gameChar_x + 5, gameChar_y - 34, 5);
		//feet
		push();
		translate(gameChar_x + 19,gameChar_y - 2);
		rotate(HALF_PI / 1.6);
		ellipse(0,0, 10, 13);
		pop();
		push();
		translate(gameChar_x - 19,gameChar_y - 2);
		rotate(HALF_PI / -1.5);
		ellipse(0,0, 10, 13);
		pop();
		//arms
		push();
		translate(gameChar_x + 18,gameChar_y - 21);
		rotate(HALF_PI / 2.0);
		ellipse(0,0, 10, 13);
		pop();
		push();
		translate(gameChar_x - 18,gameChar_y - 21);
		rotate(HALF_PI / -2.0);
		ellipse(0,0, 10, 13);
		pop();
	}
	else
	{
		// add your standing front facing code
		//ears
		fill(222, 184, 135);
		ellipse(gameChar_x - 10, gameChar_y - 57, 12);
		ellipse(gameChar_x + 10, gameChar_y - 57, 12);
		fill(245, 222, 179);
		ellipse(gameChar_x - 10, gameChar_y - 57, 7);
		ellipse(gameChar_x + 10, gameChar_y - 57, 7);
		//body
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 20, 42);
		fill(245, 222, 179);
		ellipse(gameChar_x, gameChar_y - 20, 30);
		//head
		fill(222, 184, 135);
		ellipse(gameChar_x, gameChar_y - 43, 30);
		//nose
		fill(245, 222, 179);
		ellipse(gameChar_x, gameChar_y - 37, 14, 12);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 39, 5);
		//eyes
		fill(0);
		ellipse(gameChar_x - 5, gameChar_y - 47, 5);
		ellipse(gameChar_x + 5, gameChar_y - 47, 5);
		//feet
		ellipse(gameChar_x - 13,gameChar_y - 3, 10, 14);
		ellipse(gameChar_x + 13,gameChar_y - 3, 10, 14);
		//arms
		push();
		translate(gameChar_x + 12,gameChar_y - 25);
		rotate(HALF_PI / 3.0);
		ellipse(0,0, 10, 13);
		pop();
		push();
		translate(gameChar_x - 12,gameChar_y - 25);
		rotate(HALF_PI / -3.0);
		ellipse(0,0, 10, 13);
		pop();
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	// move the characterbased on isLeft or isRight
	if (isLeft == true)
	{
		gameChar_x -= 5;
	}
	if (isRight == true)
	{
		gameChar_x += 5;
	}

	//add gravity
	if (gameChar_y < floorPos_y) {
		isFalling = true;
		gameChar_y += 2;
	}
	else {
		isFalling = false;
	}
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	//move left, move right, jump
	if (keyCode == 37)
	{
		console.log("left arrow");
		isLeft = true;
	}
	else if (keyCode == 39) {
		console.log("right arrow");
		isRight = true;
	}
	else if (keyCode == 32) {
		console.log("space bar");
		//make sure the character is on the ground
		if (gameChar_y == floorPos_y) {
			gameChar_y -= 100;
		}
	}

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	// setting back the boolean values of the variables after key is released
	if (keyCode == 37)
	{
		console.log("left arrow");
		isLeft = false;
	}
	else if (keyCode == 39) {
		console.log("right arrow");
		isRight = false;
	}
	else if (keyCode == 32) {
		console.log("space bar");
		isPlummeting = false;
	}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
