// Create a function that checks if a number is odd.

// Expect negative and decimal numbers too. Remember... 
// all negative numbers can also be either odd or even.

// Decimal numbers always return false

// Examples
// Example:
// isOdd(2)--> false
// isOdd(5)--> true
// isOdd(4)--> false
// isOdd(-17)--> true
// isOdd(-7.0)--> true
// isOdd(-7.1)--> false
// isOdd(4.23)--> false
// isOdd(5.0)-->true
// isOdd(5.23)--> false

function isOdd(n) {
    if (n % 2 == 0 || !Number.isInteger(n)) {
        return false
    } else {
        return true
    }
}

console.log(isOdd(13));
console.log(isOdd(14));
console.log(isOdd(-17));
console.log(isOdd(13.1));
