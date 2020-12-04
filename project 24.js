class Paper{
    constructor(x,y,radius){
        var options={
            restitution: 0.1,
            friction:1.5,
            density :1.2
        }

        this.body=Bodies.circle(x,yradius/2,options);
        this.radius=radius
        World.add(world,this.radius) ;  
    
   }
    display(){
        var paperpos=this.body.position;
       
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
       strokeWeight(3);
        fill("red")
        circle(0,0,this.radius);
     pop();
    }
}