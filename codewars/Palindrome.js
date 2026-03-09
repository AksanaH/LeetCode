function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  }
  return false;
}

console.log(isPalindrome("cat"));
console.log(isPalindrome("racecar"));

//or

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("cat"));
console.log(isPalindrome("racecar"));

function isPalindrome(str) {
  let newStr = str.toLowerCase().split(" ").join("");
  let revStr = newStr.split("").reverse().join("");
  if (newStr === revStr) {
    return true;
  }
  return false;
}

console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("A man a plan a canala Panama"));

// best way. Preffered solution for interviews.

function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false
console.log(isPalindrome("A man a plan a canal Panama")); // Expected: true
