function rightEl(arr, value) {
    return arr.includes(value);
}

console.log(rightEl([1, 2, 3], 2));
console.log(rightEl(["a", "b", "c"], "d"));


function rightEl(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        }
    }
    return false
}

console.log(rightEl([1, 2, 3], 2));
console.log(rightEl(["a", "b", "c"], "d"));