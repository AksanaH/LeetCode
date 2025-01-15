// Write code to return the the number of vowels in `str`
////NaN values are never compared as equal, so indexOf() always returns -1 when searchElement is NaN

let vowelCount = function (str) {
    let count = 0;
    let vowels = ['a', 'i', 'u', 'o', 'e'];

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if (vowels.indexOf(letter) !== -1) {
            count += 1;
        }
    }
    return count;
}

console.log(vowelCount('MAnager'));