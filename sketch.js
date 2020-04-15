function setup() {
  createCanvas(600, 400);
  background(0, 0, 255);
  fill(204, 204, 51)
  strokeWeight(0)
  circle(width/2, height/2, 300);
  fill(204, 204, 51)
  strokeWeight(0)
  circle(width/2, height/2, 300);
  fill(0, 0, 0)
  ellipse(width/2-60, height/2-60, 55, 100);
  ellipse(width/2+60, height/2-60, 55, 100)
  //rect(300, 20, 55, 100);
  strokeWeight(5)
  //line(width/2+80, height/2+80, height/2+20, width/2-20);
  ellipse(CORNER);
  noFill();
  arc(width/2, height/2+80, 80, 20, 0, PI);
}