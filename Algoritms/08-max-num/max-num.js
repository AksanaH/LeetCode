// Write code to return the largest number in the given array

let maxNum = function (arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
    }
    return maxNum;
}