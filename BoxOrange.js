class BoxO {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    angleMode(RADIANS);
    strokeWeight(1);
    stroke(0);
    rotate(angle);
    rectMode(CENTER);
    fill("orange");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
