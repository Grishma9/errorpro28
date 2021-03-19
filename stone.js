class Stone {
    constructor(x, y,r) {
      var options = {
        'isStatic':false,
        'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r-15, options);
     
      this.image=loadImage("stone.png")
      this.x=x;
      this.y=y;
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // pos.x=mouseX;
     // pos.y=mouseY;
    
      push();
      translate(pos.x, pos.y);
     imageMode(CENTER);
     elipseMode(RADIUS);
     image(this.image,0,0,this.r*2,this.r*2);
      
      pop();
    }
  };