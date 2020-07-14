/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
	trees_x = [-850, 20, 500, 700, 1000, 1500];
	clouds = [
		{x_pos: -800, y_pos: 50},
		{x_pos: -350, y_pos: 120},
		{x_pos: 50, y_pos: 100},
		{x_pos: 400, y_pos: 50},
		{x_pos: 1000, y_pos: 120}
	];
	mountains = [
		{x_pos: -900, y_pos: 0},
		{x_pos: 500, y_pos: 0},
		{x_pos: 1600, y_pos: 0}
	];
	canyons = [
		{x_pos: -1200, width: 100},
		{x_pos: 100, width: 100},
		{x_pos: 570, width: 100},
		{x_pos: 1250, width: 100}
	];
	collectables = [
		{x_pos: -650, y_pos: 400, isFound: false},
		{x_pos: -450, y_pos: 350, isFound: false},
		{x_pos: 30, y_pos: 400, isFound: false},
		{x_pos: 300, y_pos: 370, isFound: false},
		{x_pos: 700, y_pos: 400, isFound: false},
		{x_pos: 1400, y_pos: 370, isFound: false}
	];
}

function draw()
{
	background(173, 241, 244); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos, 0)
	// Draw clouds.
	drawClouds();
	// Draw mountains.
	drawMountains();
	// Draw trees.
	drawTrees();
	// Draw canyons.
	for (var i = 0; i < canyons.length; i++)
	{
		drawCanyon(canyons[i]);
	}
	for (var i = 0; i < canyons.length; i++)
	{
		checkCanyon(canyons[i]);
	}
	// Draw collectable items.
	for (var i = 0; i < collectables.length; i++)
	{
		if (collectables[i].isFound == false) {
			drawCollectable(collectables[i]);
		}
	}

	for (var i = 0; i < collectables.length; i++)
	{
		checkCollectable(collectables[i]);
	}

	pop();
	// Draw game character.

	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	//add gravity
	if (gameChar_y < floorPos_y) {
		isFalling = true;
		gameChar_y += 2;
	}
	else {
		isFalling = false;
	}

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
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
}

function keyReleased()
{
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
 		isFalling = true;
 	}
}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character

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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
	for (var i = 0; i < clouds.length; i++)
	{
		fill(255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, 60, 60);
		ellipse(clouds[i].x_pos + 30, clouds[i].y_pos, 80, 80);
		ellipse(clouds[i].x_pos + 60, clouds[i].y_pos, 60, 60);
	}
}

// Function to draw mountains objects.
function drawMountains()
{
	// Draw mountainss.
	for (var i = 0; i < mountains.length; i++)
	{
		fill(189, 181, 191);
		triangle(mountains[i].x_pos + 300, mountains[i].y_pos + 432, mountains[i].x_pos + 425, mountains[i].y_pos + 100, mountains[i].x_pos + 550, mountains[i].y_pos + 432); //left,middle, right
		fill(232, 225, 234);
		triangle(mountains[i].x_pos + 200, mountains[i].y_pos + 432, mountains[i].x_pos + 300, mountains[i].y_pos + 200, mountains[i].x_pos + 400, mountains[i].y_pos + 432);//left,right,middle
		//Snow
		fill(255);
		triangle(mountains[i].x_pos + 425, mountains[i].y_pos + 100, mountains[i].x_pos + 389, mountains[i].y_pos + 195, mountains[i].x_pos + 449, mountains[i].y_pos + 160);
		triangle(mountains[i].x_pos + 300, mountains[i].y_pos + 200, mountains[i].x_pos + 259, mountains[i].y_pos + 295, mountains[i].x_pos + 325, mountains[i].y_pos + 260);
	}
}
// Function to draw trees objects.
function drawTrees()
{
	for (var i = 0; i < trees_x.length; i++)
	{
		//trunk
		fill(99, 39, 147);
		rect(trees_x[i],-200/2 + floorPos_y, 40, 200/2);
		//leaves
		fill(195,167,201);
		ellipse(trees_x[i] + 20,-200/2 + floorPos_y, 144, 120);
		ellipse(trees_x[i] + 20,-350/2 + floorPos_y, 96, 80);
		ellipse(trees_x[i] + 20,-450/2 + floorPos_y, 48, 40);
	}
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
	fill(173, 241, 244);
	rect(t_canyon.x_pos, floorPos_y, t_canyon.width, 144);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
	if (gameChar_world_x > t_canyon.x_pos + 15 && gameChar_world_x < t_canyon.x_pos + (t_canyon.width - 15)) {
		isPlummeting = true;
	}
	else {
		isPlummeting = false;
	}
	if (isPlummeting == true && gameChar_y >= floorPos_y) {
		isFalling = true;
		gameChar_y += 5;
		//make sure that character cannot move anymore if character is in canyon
		if (gameChar_world_x > t_canyon.x_pos && gameChar_world_x < t_canyon.x_pos + t_canyon.width) {
			isLeft = false;
			isRight = false;
		}
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	fill(255,255,0);
	ellipse(t_collectable.x_pos, t_collectable.y_pos, 40, 40);
	fill(255, 193, 037);
	ellipse(t_collectable.x_pos, t_collectable.y_pos, 30, 30);
	fill(0);
	textSize(20);
	text('$', t_collectable.x_pos - 5, t_collectable.y_pos + 7);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
	if (dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 40)
	{
		t_collectable.isFound = true;
	}
}
