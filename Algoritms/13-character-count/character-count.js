// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

let characterCount = function (str) {
    let charObj = {};
    for (let i = 0; i < str.length; i++) {
        let curChar = str[i];
        if (curChar in charObj) {
            charObj[curChar]++;
        } else {
            charObj[curChar] = 1;
        }
    }
    return charObj;

};


console.log(characterCount('pineapple'))