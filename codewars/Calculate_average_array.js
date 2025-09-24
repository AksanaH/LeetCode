// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let quantity = array.length
    let sum = 0;
    if (quantity === 0) return 0;
    for (let i = 0; i < quantity; i++) {
        sum += array[i];

    }
    let average = sum / quantity
    return average;
}

let arr = [1, 4, 6, 8];
let arr2 = [1, 2, 3];

console.log(findAverage(arr));
console.log(findAverage(arr2));
