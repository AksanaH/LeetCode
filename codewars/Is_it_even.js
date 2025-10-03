function testEven(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(testEven(10));
console.log(testEven(101));


// or

function testEven(n) {
    return n % 2 === 0;
}


//or

function testEven(n) {
    return n % 2 === 0 ? true : false;
}