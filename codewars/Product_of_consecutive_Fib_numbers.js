// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// F(0)=0
// F(1)=1
// F(n)=F(n−1)+F(n−2)
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:

function productFib(prod) {
    let a = 0;     // F(n)
    let b = 1;     // F(n+1)

    while (a * b < prod) {
        let next = a + b;
        a = b;
        b = next;
    }

    return [a, b, a * b === prod];
}

console.log(productFib(4895));
console.log(productFib(714));
console.log(productFib(800));
