// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers 
// then you should return 0.

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([-2.398]));
console.log(sum([]));

//or

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}