//Write a function that accepts two integers and returns 
// the remainder of dividing the larger value by the smaller value.

function remainder(n, m) {
    if (n >= m) {
        return n % m
    }
    return m % n
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
