var textColorButton;
 
var textColor;
 
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  // default text color
  textColor = color(0, 0, 0);
 
  // create clear button
  textColorButton = createButton('Change Color');
  textColorButton.position(windowWidth/5+700, windowHeight/3+480);
  textColorButton.mousePressed(changeColor); 
}
 
function draw() 
{
  background(35, 35, 35);
  

  
    
    translate(0, -1*(height/17));
        
    textFont('Bodoni')
    fill(textColor);
    textSize(height/3);
    textAlign(CENTER);
    text(hour(),width/2,height/3);
    textSize(height/3);
    textAlign(CENTER);
    text(minute(),width/2,height/3*2);
    textSize(height/3);
    textAlign(CENTER);
    text(second(),width/2,height/3*3);

}
 
function changeColor()
{
  textColor = color(random(255), random(255), random(255));
}