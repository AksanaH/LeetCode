//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 


let numbers = [1, 2, 2]

function squareSum(numbers) {
    let sum = 0;
    let squaredNum = 1;
    for (let i = 0; i < numbers.length; i++) {
        squaredNum = Math.pow(numbers[i], 2);
        sum += squaredNum
    }
    return sum;
}

console.log(squareSum(numbers))

