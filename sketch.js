function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  text(hr + ':' + mn + ':' + sc, 400,400);
  text(10,200);
  strokeWeight(8);
  stroke(255,0,0);
  noFill();

  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0,0,300,300,0,scAngle);

  stroke(0, 0, 255);
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);

  stroke(0, 255, 0);
  let hrAngle = map(hr%12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 0, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 255, 0);
  line(0, 0, 50, 0);
  pop();


}