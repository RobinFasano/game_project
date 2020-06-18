/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

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
		{x_pos: -1300, width: 100},
		{x_pos: 0, width: 100},
		{x_pos: 470, width: 100},
		{x_pos: 1150, width: 100}
	];
	collectables = [
		{x_pos: -650, y_pos: 400},
		{x_pos: -450, y_pos: 350},
		{x_pos: 30, y_pos: 400},
		{x_pos: 300, y_pos: 370},
		{x_pos: 700, y_pos: 400},
		{x_pos: 1400, y_pos: 370}
	];
}

function draw()
{
	background(173, 241, 244); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	push();
	translate(scrollPos, 0);

	// Draw clouds.

	for (var i = 0; i < clouds.length; i++)
	{
		fill(255);
		ellipse(clouds[i].x_pos + 100, clouds[i].y_pos, 60, 60);
		ellipse(clouds[i].x_pos + 130, clouds[i].y_pos, 80, 80);
		ellipse(clouds[i].x_pos + 160, clouds[i].y_pos, 60, 60);
	}
	// Draw mountainss.
	for (var i = 0; i < mountains.length; i++)
	{
		fill(189, 181, 191);
		triangle(mountains[i].x_pos + 300, mountains[i].y_pos + 432, mountains[i].x_pos + 550, mountains[i].y_pos + 432, mountains[i].x_pos + 425, mountains[i].y_pos + 100); //left,right,middle
		fill(232, 225, 234);
		triangle(mountains[i].x_pos + 200, mountains[i].y_pos + 432, mountains[i].x_pos + 400, mountains[i].y_pos + 432, mountains[i].x_pos + 300, mountains[i].y_pos + 200);//left,right,middle
		//Snow
		fill(255);
		triangle(mountains[i].x_pos + 425, mountains[i].y_pos + 100, mountains[i].x_pos + 449, mountains[i].y_pos + 160, mountains[i].x_pos + 389, mountains[i].y_pos + 195);
		triangle(mountains[i].x_pos + 300, mountains[i].y_pos + 200, mountains[i].x_pos + 325, mountains[i].y_pos + 260, mountains[i].x_pos + 259, mountains[i].y_pos + 295);
	}

	// Draw trees.

	for (var i = 0; i < trees_x.length; i++)
	{
		//trunk
		fill(99, 39, 147);
		rect(trees_x[i],-200/2 + floorPos_y, 40, 200/2);
		//leaves
		fill(195,167,201);
		ellipse(trees_x[i] + 20,-200/2 + floorPos_y, 144, 120);
		ellipse(trees_x[i] + 20,-200/2 + floorPos_y - 58, 96, 80);
		ellipse(trees_x[i] + 20,-200/2 + floorPos_y - 108, 48, 40);
	}

	// Draw canyons
	for (var i = 0; i < canyons.length; i++)
	{
		fill(173, 241, 244);
		rect(canyons[i].x_pos + 100, floorPos_y, canyons[i].width, 144);
	}
	// Draw collectable items

	for (var i = 0; i < collectables.length; i++)
	{
		fill(255,255,0);
		ellipse(collectables[i].x_pos, collectables[i].y_pos, 40, 40);
		fill(255, 193, 037);
		ellipse(collectables[i].x_pos, collectables[i].y_pos, 30, 30);
		fill(0);
		textSize(20);
		text('$', collectables[i].x_pos - 5, collectables[i].y_pos + 7);
	}

	pop();

	// Draw the game character - this must be last

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

	//////// Game character logic ///////
	// Logic to move

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
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
