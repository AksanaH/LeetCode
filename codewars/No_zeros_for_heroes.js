//Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
        n = n / 10;
    }
    return n;
}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(-105));
console.log(noBoringZeros(-1050000));


