// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
    let zeroes = 0;
    let ones = 0;

    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        if (current === '0') {
            zeroes++
        } else {
            ones++
        }
    }
    return zeroes === ones;
};

console.log(zeroesAndOnes('10100'));
console.log(zeroesAndOnes('111000'));
