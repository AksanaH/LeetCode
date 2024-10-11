// https://leetcode.com/problems/factorial-trailing-zeroes/description/


function trailingZeroes(n) {
    let rezult = 0;
    for (let i = 5; i <= n; i = i * 5) {
        rezult += Math.floor(n / i);
    }
    return rezult;

};



console.log(trailingZeroes(11));