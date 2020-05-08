/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;

	//Add your code here ...
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
	line(240, 127, 250, 127);
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
	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
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

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
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

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
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
	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
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
