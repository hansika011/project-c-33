class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 20, options);
        
        this.x=x
        this.y=y
        this.r=20
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,20,20);
        pop();
      }
}