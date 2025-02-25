// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

let sortedSquares = function (arr) {
    const result = []
    let left = 0;
    let right = arr.length - 1;

    for (let i = right; i >= 0; i--) {
        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            result[i] = arr[left] ** 2;
            left++
        } else {
            result[i] = arr[right] ** 2;
            right--
        }
    }
    return result;
};


let array = [-11, -2, 0, 2, 4];
console.log(sortedSquares(array));
