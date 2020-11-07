class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
    this.path=[];
  }

  display() {
 super.display();
 if(this.body.position.x>220 && this.body.velocity.x>10)
 {
 var position=[this.body.position.x,this.body.position.y]
 this.path.push(position);
 }
 for(var x=0; x<this.path.length; x=x+1)
 {image(this.smokeimage,this.path[x][0],this.path[x][1])}

  }
}
