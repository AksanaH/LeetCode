// Write code to add all the numbers in `arr` and return the total

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        sum += currentNum;
    }
    return sum;
}

console.log(sumArray([10, 3, 45]));