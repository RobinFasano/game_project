/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);

}

function draw()
{
	background(173, 241, 244); //fill the sky blue

	noStroke();
	fill(76,224,187);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	fill(255);
	ellipse(250, 100, 60, 60);
	ellipse(280, 100, 80, 80);
	ellipse(310, 100, 60, 60);


	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance

	fill(189, 181, 191);
	triangle(450, 432, 700, 432, 575, 100); //left,right,middle
	fill(232, 225, 234);
	triangle(350, 432, 550, 432, 450, 200);//left,right,middle
	noStroke();
	//Snow
	fill(255);
	noStroke();
	beginShape();
	vertex(575, 100); //top
	vertex(599, 160);//right
	vertex(539, 195);//left
	endShape();

	fill(255);
	noStroke();
	beginShape();
	vertex(450, 200); //top
	vertex(475, 260);//right
	vertex(409, 295);//left
	endShape();

	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//trunk
	fill(99, 39, 147);
	rect(840, 332, 40, 100);
	//leaves
	fill(195,167,201);
	ellipse(860, 310, 120 * 1.2, 120);
	ellipse(860, 230, 80  * 1.2, 80);
	ellipse(860, 180, 40 * 1.2, 40);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	fill(173, 241, 244);
	rect(100, 432, 100, 144);


	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins

	fill(119, 226, 244);
	stroke(255);
	beginShape(line);
	vertex(350, 400 - 5);
	vertex(360, 390 - 5);
	vertex(390, 390 - 5);
	vertex(400, 400 - 5);
	vertex(375, 430 - 5);
	vertex(350, 400 - 5);
	endShape();

	line

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
