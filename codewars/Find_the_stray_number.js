//You are given an odd-length array of integers, in which all of them are the same, 
// except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    let sortedArr = numbers.sort((a, b) => a - b)
    if (sortedArr[0] !== sortedArr[1]) {
        return sortedArr[0]
    } else {
        return sortedArr[sortedArr.length - 1]
    }
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

