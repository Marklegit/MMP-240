d = 10;

function setup(){
createCanvas(400,400);

}




function draw() {
    background(220);
    strokeWeight(4);
    fill("red");
    ellipse(mouseX, mouseY, 40);
    
}
  if (mousePressed) {
    stroke(255);
  } else {
    noStroke();
  }
   
