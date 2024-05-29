class Calculator {
    sum(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Делить на ноль нельзя');
        }
        return a / b;
    }
}

const calculator = new Calculator();

console.log("Sum: ", calculator.sum(5, 5));
console.log("Subtract: ", calculator.subtract(3, 2));
console.log("Multiply: ", calculator.multiply(10, 10));
console.log("Divide: ", calculator.divide(81, 9));
