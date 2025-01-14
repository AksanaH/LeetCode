// https://leetcode.com/problems/powx-n/


function myPow(x, n) {
    let result = 1;
    let absolutNum = Math.abs(n);
    if (n === 0) return 1;
    if (x === 1) return 1;
    if (x === -1 && n % 2 === 0) {
        return 1
    } else if (x === -1 && n % 2 !== 0) {
        return -1
    }
    for (let i = 0; i < absolutNum; i++) {
        result *= x
    }
    if (n < 0) {
        result = 1 / result;
    }
    return result;
};

// console.log(myPow(2, 3));
// console.log(myPow(2, 0));
//console.log(myPow(-1, -2147483648));
console.log(myPow(-3, -5));

