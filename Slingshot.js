//to create a link between two objects 
class Slingshot{
    constructor(bodyA,pointB){
        var options={
          //so that it should not break the chain in between  
          stiffness:0.3,
          bodyA:bodyA,
          pointB:pointB,
          length:10
        }
        this.pointB=pointB;
        //to create the chain
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    //for function mouseReleased to function properly
    fly(){
      this.sling.bodyA=null;
    }
    display(){
      if(this.sling.bodyA){
     var pointA=this.sling.bodyA.position;
     var pointB=this.pointB;
     //to display the link created
     line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
    }
}