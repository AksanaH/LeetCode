function validParentheses(str) {
    let balance = 0;
    let arr = str.split('');

    for (let el of arr) {
        if (el === "(") {
            balance++;
        } else {
            balance--
        }

        if (balance < 0) {
            return false
        }
    }

    return balance === 0;
}

console.log(validParentheses('(())'));
console.log(validParentheses('((())'));
console.log(validParentheses('())'));

