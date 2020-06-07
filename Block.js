class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.1,
      //isStatic:true
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    rotate(angle);

    if (this.body.speed < 3) {
      push();
      fill(228, 75, 125);
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      translate(pos.x, pos.y);
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      fill(228, 75, 125);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
}
