const multiplyInto20 = function (arr) {
  let numObj = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let neededNumber = 20 / currentNum;
    if (numObj[neededNumber]) {
      return true;
    }
    numObj[currentNum] = true;
  }

  return false;

};

let array = [2, 8, 7, 5, 4, 3];
let arr = [4, 8, 15, 16, 23, 42];
console.log(multiplyInto20(array));
console.log(multiplyInto20(arr));
