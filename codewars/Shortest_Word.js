//Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let words = s.split(' ');
    let sortedWords = words.sort((a, b) => a.length - b.length)
    return sortedWords[0].length
}

let sentense = "Cat walks on the yard"
let sentense2 = "Cat walk"


console.log(findShort(sentense));
console.log(findShort(sentense2));
