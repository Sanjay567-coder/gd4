class yellowrobo{
    constructor(x,y,width,height,xvelocity,yvelocity){
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.xvelocity = xvelocity;
     this.yvelocity = yvelocity;
    }

    display(){
        this.robo = createSprite(this.x, this.y, this.width, this.height);
        this.robo.velocityX = this.xvelocity;
        this.image = loadImage("images/yellowrobo.jpg");
        this.robo.addImage(this.image);
        
    }
}