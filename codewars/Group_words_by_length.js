function groupByLength(words) {
    let result = {};
    for (let word of words) {
        let length = word.length;

        if (result[length]) {
            result[length].push(word);
        } else {
            result[length] = [word];
        }
    }
    return result;
}

console.log(groupByLength(["cat", "dog", "bird", "car", "elephant"]));