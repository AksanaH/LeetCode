function mostFrequent(str) {
  let counter = {};
  let words = str.split(" ");
  for (let word of words) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  let maxCount = 0;
  let maxWord = "";

  for (let key in counter) {
    if (counter[key] > maxCount) {
      maxCount = counter[key];
      maxWord = key;
    }
  }

  return maxWord;
}

console.log(mostFrequent("cat dog cat dog dog"));
