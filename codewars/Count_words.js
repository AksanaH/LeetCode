function countWords(sentence) {
  let count = {};
  const words = sentence.split(" ");
  for (let word of words) {
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }
  return count;
}

console.log(countWords("I love piza piza"));
