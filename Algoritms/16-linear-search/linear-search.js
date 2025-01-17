// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }

    }
    return -1;
};


let array = [1, 3, 45, 60, 2];
let target = 455;

console.log(linearSearch(array, target));