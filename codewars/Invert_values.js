//Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(num => -num)
}

console.log(invert([-1, 34, -7, 6]));