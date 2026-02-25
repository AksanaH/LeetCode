function groupAnagrams(words) {
    let result = {};

    for (let word of words){
        let key = word.split('').sort().join('');

        if (result[key]){
            result[key].push(word);
        } else {
            result[key] = [word];
        }
    }
    return Object.values(result);
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));