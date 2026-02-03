function countLetters(str) {
    let counter = {};
    for (let char of str) {
        if (counter[char]) {
            counter[char]++
        } else {
            counter[char] = 1
        }
    }
    return counter;
}

console.log(countLetters("ffuunrty"))

function countLetters(str) {
    let counter = {};
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if (counter[char]) {
            counter[char]++
        } else {
            counter[char] = 1
        }
    }
    return counter;
}

console.log(countLetters("ffuunrty"))
