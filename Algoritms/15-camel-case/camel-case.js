// Write code to create a function that accepts a string and returns the string in camelCase

let camelCase = function (str) {
    let result = '';
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let letter = currentWord.split('');
        if (i > 0) {
            letter[0] = letter[0].toUpperCase();
        }
        result += letter.join('');
    }
    return result;
};


console.log(camelCase('hello world blah'))