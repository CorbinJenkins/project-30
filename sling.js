class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA: body1,
            pointB: point2,
            length: 1,
            stiffness: 0.01
        }
        this.pointB = point2;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if (this.sling.bodyA){
            var ptA = this.sling.bodyA.position;
            var ptB = this.pointB;
            stroke("green")
        
            strokeWeight(4);
            line(ptA.x,ptA.y,ptB.x,ptB.y);
        }
        
    }
    
    fly(){
        this.sling.bodyA=null;
    }
    attach(body1){
        this.sling.bodyA=body1;
    }
}