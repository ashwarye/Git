class ShootBall{
    constructor(x, y, width, height, angle){
        var options = {
           // bodyA: bodyA,
            //pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.body = Bodies.rectangle(x, y, width, height, angle, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }

    attach(body){}

    shoot(){}

    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.width);
        pop();
    }

}
