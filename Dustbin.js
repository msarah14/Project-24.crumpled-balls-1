class Dustbin{
    constructor(x,y,wigth,height){
        var options={
            restitution: 0.1,
            
        }

        this.body=Bodies.rectangle(x,y,this.wigth,this.height,options);
        this.wight=this.wight
        World.add(world,this.radius) ;  
    
   }
    display(){
        var pos=this.body.position;
       
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
       strokeWeight(3);
        fill("red")
        rect(0,0,this.radius);
     pop();
    }
}