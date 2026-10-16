function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);

  describe('Two eyes that follow the cursor.');
}

function draw() {
  background(208, 231, 245);

  // Draw left eye

  let leftX = 140;
  let leftY = 200;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(0, 0, 100);
  ellipse(0, 0, 60, 60);
  rotate(leftAngle);
  fill(200, 80, 80);
  ellipse(12.5, 0, 28, 28);
  pop();

  // Draw right eye

  let rightX = 260;
  let rightY = 200;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(0, 0, 100);
  ellipse(0, 0, 45, 45);
  rotate(rightAngle);
  fill(200, 80, 80);
  ellipse(12.5, 0, 22, 22);
  pop();
}