function count(arr) {
    if (arr.length <= 0) return [];
    let positiveCount = 0;
    let negativeSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount += 1
        } else if (arr[i] < 0) {
            negativeSum += arr[i]
        }
    }
    return [positiveCount, negativeSum]
}

console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
