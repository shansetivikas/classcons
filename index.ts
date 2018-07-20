class Rectangle{
     private length:number;
     private breadth:number;
    constructor(length,breadth){
         this.length = length;
         this.breadth = breadth;
    }

    public calculateArea():number{
              return  this.length*this.breadth;
    }

}


var rect = new Rectangle(20,30);
console.log(rect.calculateArea());