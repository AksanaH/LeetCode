function firstUniqueChar(str) {
  let counter = {};
  for (let letter of str) {
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  for (let letter of str) {
    if (counter[letter] === 1) {
      return letter;
    }
  }
  return null;
}

console.log(firstUniqueChar("aasot"));

//I need to return the first character in the string that appears exactly once.
// If no such character exists, I should return null.
//I’ll use an object as a frequency counter to count how many times each character appears.
//Because the order matters, I can’t rely on iterating over the object. I need to iterate over the
// original string again to find the first character with count equal to one.

//First I create an empty object.
// Then I iterate through the string and increment counts for each character.
// After that I iterate through the string again and return the first character whose count is 1.
// If I finish the loop without finding one, I return null.
