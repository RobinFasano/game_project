/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

	canyon = {x_pos: 0, width: 100};
	collectable = {x_pos: - 170, y_pos: 100, size: 50};
	cloud = {x_pos: 0, y_pos: 0, size: 50};
	mountain = {x_pos: - 140, y_pos: 0, size: 50};

}

function draw()
{
	background(173, 241, 244); //fill the sky blue

	noStroke();
	fill(76,224,187);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//draw mountain
	fill(189, 181, 191);
	triangle(mountain.x_pos + 450, mountain.y_pos + 432, mountain.x_pos + 700, mountain.y_pos + 432, mountain.x_pos + 575, mountain.y_pos + 100); //left,right,middle
	fill(232, 225, 234);
	triangle(mountain.x_pos + 350, mountain.y_pos + 432, mountain.x_pos + 550, mountain.y_pos + 432, mountain.x_pos + 450, mountain.y_pos + 200);//left,right,middle
	//Snow
	fill(255);
	triangle(mountain.x_pos + 575, mountain.y_pos + 100, mountain.x_pos + 599, mountain.y_pos + 160, mountain.x_pos + 539, mountain.y_pos + 195);
	triangle(mountain.x_pos + 450, mountain.y_pos + 200, mountain.x_pos + 475, mountain.y_pos + 260, mountain.x_pos + 409, mountain.y_pos + 295);

	//draw tree
	//trunk
	fill(99, 39, 147);
	rect(treePos_x, treePos_y, 40, 145);
	//leaves
	fill(195,167,201);
	ellipse(treePos_x + 20, treePos_y + 22, 144, 120);
	ellipse(treePos_x + 20,treePos_y - 58, 96, 80);
	ellipse(treePos_x + 20, treePos_y - 108, 48, 40);

	//draw canyon
	fill(173, 241, 244);
	rect(canyon.x_pos + 100, floorPos_y, canyon.width, 144);

	//draw collectable
	//leaf
	fill(50, 205, 50);
	push();
	translate(collectable.x_pos + 245, collectable.y_pos + 291);
	rotate(HALF_PI / -2.0);
	ellipse(0,0, 5, 18);
	pop();
	//stem
	stroke(139, 69, 19);
	strokeWeight(2);
	line(collectable.x_pos +  250, collectable.y_pos + 300, collectable.x_pos +  255, collectable.y_pos + 285);
	//peachhs
	stroke(160, 82, 45);
	strokeWeight(0.1);
	fill(255, 127, 80);
	ellipse(collectable.x_pos + 250, collectable.y_pos + 310, collectable.size - 22, collectable.size - 20);
	strokeWeight(0.2);
	ellipse(collectable.x_pos + 257, collectable.y_pos + 310, collectable.size - 22, collectable.size - 20);
	noStroke();
	fill(244, 164, 96, 200);
	ellipse(collectable.x_pos + 255, collectable.y_pos + 308, collectable.size - 34, collectable.size - 33);

	//cloud
	fill(255);
	ellipse(cloud.x_pos + 250, cloud.y_pos + 100, cloud.size + 10, cloud.size + 10);
	ellipse(cloud.x_pos + 280, cloud.y_pos + 100, cloud.size + 30, cloud.size + 30);
	ellipse(cloud.x_pos + 310, cloud.y_pos + 100, cloud.size + 10, cloud.size + 10);


	//draw character
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

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
