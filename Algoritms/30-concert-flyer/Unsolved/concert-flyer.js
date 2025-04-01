// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    let magazineWords = magazine.split(' ');
    let flyerWords = flyer.split(' ');

    let magazineMap = {};
    let flyerMap = {};

    for (let i = 0; i < magazineWords.length; i++) {
        let word = magazineWords[i];
        if (word in magazineMap) {
            magazineMap[word]++
        } else {
            magazineMap[word] = 1
        }
    }

    for (let i = 0; i < flyerWords.length; i++) {
        let word = flyerWords[i];

        if (word in flyerMap) {
            flyerMap[word]++
        } else {
            flyerMap[word] = 1
        }
    }

    for (let key in flyerMap) {
        console.log(`Checking word: ${key}, Magazine count: ${magazineMap[key]}, Flyer count: ${flyerMap[key]}`);
        console.log(`flyerMap[${key}]:`, flyerMap[key], `Type:`, typeof flyerMap[key]);
        if (magazineMap[key] !== flyerMap[key])
            return false;
    }

    return true;
};

console.log(concertFlyer("hello world hello", "world hello hello")); // true
console.log(concertFlyer("hello world", "hello")); // true
console.log(concertFlyer("hello world", "world hello hello")); // false