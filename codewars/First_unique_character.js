function firstUniqueChar(str) {
    let arr = str.split('');
    let counter = {};

    for (let el of arr) {
        if (counter[el]) {
            counter[el]++
        } else {
            counter[el] = 1
        }
    }

    for (let letter of arr) {
        if (counter[letter] === 1) {
            return letter
        }

    }
    return null;
}

console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("swiwiss"));
