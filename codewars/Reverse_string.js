function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i].toLowerCase();
  }
  return reversed;
}

console.log(reverseString("Pizza"));
console.log(reverseString("I like Pizza"));

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("Pizza"));
console.log(reverseString("I like Pizza"));
