function mostFrequent(str) {
    let arr = str.split(' ');
    let counter = {};

    for (let word of arr) {
        if (counter[word]) {
            counter[word]++
        } else {
            counter[word] = 1
        }
    }

    let maxCount = 0;
    let mostFrequent = '';

    for (let key in counter) {
        if (counter[key] > maxCount) {
            maxCount = counter[key];
            mostFrequent = key;
        }
    }
    return mostFrequent;
}

console.log(mostFrequent("apple banana apple orange banana apple"));