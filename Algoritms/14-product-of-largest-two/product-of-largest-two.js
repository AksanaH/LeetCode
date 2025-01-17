// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

let productOfLargestTwo = function (arr) {
    let largest = null;
    let secondLargest = null;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum > largest || largest === null) {
            secondLargest = largest;
            largest = currentNum;
        } else if (currentNum > secondLargest || secondLargest === null) {
            secondLargest = currentNum;
        }
    }
    return largest * secondLargest;
};

console.log(productOfLargestTwo([2, 3, 4, 5, 10, 8]))