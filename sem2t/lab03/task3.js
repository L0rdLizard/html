class Calculator {
    static sum(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error('You cannot divide by zero');
        }
        return a / b;
    }
}

console.log("Sum: ", Calculator.sum(2, 2));
console.log("Subtract: ", Calculator.subtract(1, 10));
console.log("Multiply: ", Calculator.multiply(9, 8));
console.log("Divide: ", Calculator.divide(121, 11));