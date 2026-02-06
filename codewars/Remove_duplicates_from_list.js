// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function removeDuplicates(arr) {
    let result = [];
    for (let num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 1, 1, 3, 2]));

function removeDuplicates2(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates2([1, 2, 1, 1, 3, 2]));

function removeDuplicates(arr) {
    let seen = {};
    let result = [];
    for (let el of arr) {
        if (!seen[el]) {
            seen[el] = true
            result.push(el)
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
console.log(removeDuplicates(['d', 'd', 'f', 'b', 't', 'f']))
