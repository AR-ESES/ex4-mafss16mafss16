let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg, j * height / espAltura)
      translate(30-40)
      scale(0,16);
      
      stroke (255,222,173);
	fill(28, 28, 28);
	circle(650, 200, 150);
	strokeWeight(0.5);
stroke(216,191,216);
fill (216,191,216);
circle(620, 190, 25);
strokeWeight(0.5);
stroke(216,191,216);
fill (216,191,216);
circle(675, 190, 25);
strokeWeight(0.7);
stroke(0,0,0);
fill (107,66,38);
fill(28, 28, 28);
noStroke();
rect(640, 230, 100, 100, 45);
fill(28, 28, 28);
noStroke();
rect(710, 225, 100, 100, 45);
fill(28, 28, 28);
noStroke();
rect(780, 220, 100, 100, 45);
fill (216,191,216);
noStroke();
arc(650, 223, 50, 50, 0 , PI, CHORD);
      pop();
    }
  }
}