class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':0.1
      }
      this.body = Bodies.circle(x,y,70, options);
      this.radius =70;
      
     this.paper=loadImage("paper1.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      
      imageMode(RADIUS);
      fill("purple");
      image(this.paper,pos.x,pos.y,83,83);
  
    }
  };
  
  