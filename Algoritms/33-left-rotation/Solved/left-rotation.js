// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  if (arr.length === 0) {
    return arr;
  }

  //console.log("Before Rotation:", arr);
  while (positions > 0) {
    const first = arr.shift();

    arr.push(first);

    positions--;
    //console.log("After one rotation:", arr);
  }
  return arr;
};

console.log("Final rotated array:", leftRotation([0, 1, 3, 1, 8], 4));
console.log("Final rotated array:", leftRotation([3, 1, 8], 1));
console.log("Final rotated array:", leftRotation([3, 1, 8], 2));
console.log("Final rotated array:", leftRotation([3, 1, 8], 3));
console.log("Final rotated array:", leftRotation([3, 1, 8], 4));



