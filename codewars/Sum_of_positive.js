//You get an array of numbers, return the sum of all of the positives ones.
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let positiveSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveSum += arr[i]
        }
    }
    return positiveSum
}

console.log(positiveSum([1, -4, 50]));
console.log(positiveSum([-1, -4, -50]));
