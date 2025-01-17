// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

let isUnique = function (arr) {
    let resulObj = {};
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (resulObj[currentNum]) {
            return false;
        } else {
            resulObj[currentNum] = true;
        }
    }
    return true;
};

let array = [2, 8, 7, 5, 4, 3];
let array2 = [];
let array3 = [-2, 5, -2, 53, 22, 1];

console.log(isUnique(array));
console.log(isUnique(array2));
console.log(isUnique(array3));

