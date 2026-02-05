function anagram(str1, str2) {
    let counter1 = {};
    let counter2 = {};
    let letters1 = str1.toLowerCase().split('');
    let letters2 = str2.toLowerCase().split('');

    if (str1.length !== str2.length) {
        return false;
    }

    for (let letter of letters1) {
        if (counter1[letter]) {
            counter1[letter]++
        } else {
            counter1[letter] = 1;
        }
    }

    for (let letter of letters2) {
        if (counter2[letter]) {
            counter2[letter]++
        } else {
            counter2[letter] = 1;
        }
    }

    for (let key in counter1) {
        if (counter2[key] === undefined) {
            return false
        } else if (counter2[key] !== counter1[key]) {
            return false
        }
    }


    return true;
}

console.log(anagram('ddd', 'FFF'));
console.log(anagram('silent', 'lentis'));
