function countNumbers(arr) {
    let counter = {};
    for (let num of arr) {
        if (counter[num]) {
            counter[num]++
        } else {
            counter[num] = 1
        }
    }
    return counter;
}

console.log(countNumbers([1, 1, 3, 2, 4, 5, 5, 5, 5]))