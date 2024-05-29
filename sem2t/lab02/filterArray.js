function filterArray(array, callback) {
    const result = [];
    for (const item of array) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 

const oddNumbers = filterArray(numbers, num => num % 2 !== 0);
console.log(oddNumbers);

