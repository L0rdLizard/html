class Shape {
    calculateArea() {
        throw new Error('It is abstract method');
    }
    calculatePerimeter() {
        throw new Error('It is abstract method');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const rectangle = new Rectangle(32, 12);
const circle = new Circle(11);
console.log("Area of ​​a rectangle:", rectangle.calculateArea());
console.log("Perimeter of a rectangle:", rectangle.calculatePerimeter());
console.log("Area of ​​a circle:", circle.calculateArea().toFixed(2));
console.log("Area of ​​a circle:", circle.calculatePerimeter().toFixed(2));
