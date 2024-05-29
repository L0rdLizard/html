class Shape {
    calculateArea() {
        throw new Error('Метод calculateArea должен быть переопределен');
    }

    calculatePerimeter() {
        throw new Error('Метод calculatePerimeter должен быть переопределен');
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

const rectangle = new Rectangle(8, 5);
const circle = new Circle(6);

console.log("Площадь прямоугольника:", rectangle.calculateArea());
console.log("Периметр прямоугольника:", rectangle.calculatePerimeter());


console.log("Площадь круга:", circle.calculateArea().toFixed(2));
console.log("Периметр круга:", circle.calculatePerimeter().toFixed(2));
