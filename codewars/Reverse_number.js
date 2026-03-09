function reverseNumber(num) {
  let sign = Math.sign(num);
  let reversed = parseInt(Math.abs(num).toString().split("").reverse().join(""));
  return sign * reversed;
}

console.log(reverseNumber("100077")); //JavaScript automatically converts strings to numbers when used in mathematical operations. However, it’s safer to explicitly convert the value using Number().
console.log(reverseNumber("tttp"));

console.log(reverseNumber(1000));
console.log(reverseNumber(-100077));

function reverseNumber(num) {
  let sign = Math.sign(num);
  let reversed = Number(Math.abs(num).toString().split("").reverse().join(""));
  return sign * reversed;
}

console.log(reverseNumber("100077")); //JavaScript automatically converts strings to numbers when used in mathematical operations. However, it’s safer to explicitly convert the value using Number().
console.log(reverseNumber("tttp"));

console.log(reverseNumber(1000));
console.log(reverseNumber(-100077));

//Number()
// converts the entire value to a number
// parseInt()
// extracts an integer from the beginning of a string
