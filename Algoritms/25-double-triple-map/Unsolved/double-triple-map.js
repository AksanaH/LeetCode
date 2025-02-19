// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

let doubleTripleMap = function (arr) {
    let newArr = arr.map(function (num) {
        if (num % 2 === 0) {
            return num * 2
        }
        return num * 3

    })
    return newArr;
}

let arr = [1, 4, 5, 7, 20];
console.log(doubleTripleMap(arr));