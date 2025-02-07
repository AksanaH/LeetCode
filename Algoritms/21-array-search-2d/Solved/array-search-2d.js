// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === "X") {
        count++;
      }
    }
  }

  return count;
};

let twoDArr = [
  ["O", "O", "O"],
  ["X", "O", "O"],
  ["O", "X", "X"],
  ["O", "O", "X"]
];

console.log(arraySearch2D(twoDArr));