function filterArray(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); 

let oddNumbers = filterArray(numbers, function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers); 
