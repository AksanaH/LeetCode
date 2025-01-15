// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome


let isPalindrome = function (str) {
    let cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let reverseStr = cleanStr.split("").reverse().join("");
    if (reverseStr === cleanStr) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('race car'));
console.log(isPalindrome('race cara'));
