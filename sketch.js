
var temp_x1 = 0;
var temp_y1 = 0;
var temp_x2 = 0;
var temp_y2 = 0;
var temp_x3 = 0;
var temp_y3 = 0;
var temp_x4 = 0;
var temp_y4 = 0;

var w = width;
var h = height;


function setup(){

canvas.parent("container");

frameRate(6);

colorMode(HSB,360,100,100,100);
createCanvas(1000,800);
background(267,90,78);

}

function coordinates (){

temp_x1 = random(0, width/2);
temp_y1 = random(0,height/2);
temp_x2 = random(width/2+1, width);
temp_y2 = random(0,height/2);
temp_x4 = random(0, width/2);
temp_y4 = random(height/2+1,height);
temp_x3 = random(width/2+1, width);
temp_y3 = random(height/2+1,height);
}


function draw() {

coordinates();

if ( temp_x1 > width/4 && temp_x3 < 3*width/4){


	stroke(47,87,84);
	fill(0,100,100,7);
}


fill(180,100,100,7);


quad();

function quad (){





strokeWeight(1);
beginShape();
vertex(temp_x1, temp_y1);
vertex(temp_x2, temp_y2);
vertex(temp_x3, temp_y3);
vertex(temp_x4, temp_y4);
endShape(CLOSE);

}
}
	





