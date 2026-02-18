// Write a function that takes an array of numbers (integers for the tests) and a target 
// number. It should find two different items in the array that, when added together, give 
// the target value. The indexes of these items should then be returned in a tuple / list 
// (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions 
// will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and
//  all of the items will be numbers; target will always be the sum of two different items
//  from that array).


function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([32, 21, 45, 56, 1], 22));

function twoSumExists(arr, target) {
    let seen = {};
    for (let num of arr) {
        let need = target - num;
        if (need in seen) {
            return true
        } else {
            seen[num] = true;
        }
    }
    return false;
}
console.log(twoSumExists([1, 2, 3], 4));
console.log(twoSumExists([3, 2, 4], 8));