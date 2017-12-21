var sketch = function(p){
  var gray = 0;

p.setup = function(){
  p.createCanvas(600, 400);
  };

p.draw = function(){
  if (p.mouseIsPressed){
    p.fill(0);
    }
  else{
    p.fill(255);
    }
  p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
