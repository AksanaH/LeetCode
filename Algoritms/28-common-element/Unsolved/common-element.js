// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function (arrA, arrB) {
    let set = new Set(arrA);

    for (let num of arrB) {
        if (set.has(num)) {
            return num;
        }
    }

};


let arrA = [1, 2, 3, 4, 5, 6]
let arrB = [-5, 0, -10, 5, 16]
console.log(commonElement(arrA, arrB))


// Write code to create a function that accepts two arrays of numbers
// There will be few numbers common to both arrays
// Return the common numbers
// You may not use the `indexOf` or `includes` method

var commonElements = function (arrA, arrB) {
    let setA = new Set(arrA);
    let result = [];

    for (let num of arrB) {
        if (setA.has(num)) {
            result.push(num);
        }
    }

    return result;
};


let arrC = [-5, 2, 3, 4, 5, 6]
let arrD = [-5, 0, -10, 5, 6]
console.log(commonElements(arrC, arrD))