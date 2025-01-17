// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
    strA = strA.replace(/\W/g, '').toLowerCase();
    strB = strB.replace(/\W/g, '').toLowerCase();

    if (strA.length !== strB.length) {
        return false;
    }

    const charCountA = {};
    const charCountB = {};

    for (let char of strA) {
        charCountA[char] = (charCountA[char] || 0) + 1;
    }

    for (let char of strB) {
        charCountB[char] = (charCountB[char] || 0) + 1;
    }

    // Compare frequency maps
    for (let char in charCountA) {
        if (charCountA[char] !== charCountB[char]) {
            return false;
        }
    }
    return true;

};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("race car", "carr ace")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("Astronomer", "Moon starer"));// true