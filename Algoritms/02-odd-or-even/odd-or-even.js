// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number



let oddOrEven = function (num) {
    if (isNaN(num)) {
        console.log('enter a number')
        return 'Invalid input';
    }
    if (num % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

console.log(oddOrEven(100));
console.log(oddOrEven(109));
console.log(oddOrEven('ddd'));


