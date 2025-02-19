// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

let arrayIntersection = function (arr1, arr2) {
    return arr1.filter(function (num) {
        return arr2.includes(num);
    })
};


let arr1 = [12, 3, 4, 6];
let arr2 = [122, 3, 44, 6];

console.log(arrayIntersection(arr1, arr2));