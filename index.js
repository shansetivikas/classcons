var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
var rect = new Rectangle(20, 30);
console.log(rect.calculateArea());
