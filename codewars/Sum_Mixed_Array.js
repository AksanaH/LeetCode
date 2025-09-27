// Given an array of integers as strings and numbers, return the sum of the
//  array values as if all were numbers.

// Return your answer as a number.

let arr1 = ['12', '1', 3, '10'];
let arr2 = [];
let arr3 = ['1', '-10'];

function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        let current = parseInt(x[i]);
        sum += current;
    }
    return sum
}

console.log(sumMix(arr1));
console.log(sumMix(arr2));
console.log(sumMix(arr3));
