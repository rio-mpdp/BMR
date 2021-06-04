class Umbrella {
    constructor(x,y){
        this.w=45
    
        var options = {
            isStatic: true,
        }
      
        this.umbrella = Bodies.circle(x,y,60,options);
        this.radius = 50;
        World.add(world, this.umbrella)
       
        
    }

    display(){
              if(flag==0){
                noFill()
                noStroke()
            ellipseMode(RADIUS)
            ellipse(300,300,this.w)
          }else{
              console.log(23)
              Matter.World.remove(world,this.umbrella)
          }
     
            
    }
}
