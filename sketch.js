let array =[];


function setup() {
  createCanvas(600,600);
  background(220, 50, 130);
  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed == true) {
    //stroke(map(mouseX,0,600,0,255,true),map(mouseY,0,600,0,115,true) );
    // line(width- mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }

}
function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
} else if (key === 'd'){

    for (let i = 0; i < array.length; i++){
      line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);
  }
}
  return false;

}
