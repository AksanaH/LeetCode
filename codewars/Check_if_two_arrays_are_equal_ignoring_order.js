function arraysEqual(arr1, arr2) {
    let counter1 = {};
    let counter2 = {};

    if (arr1.length !== arr2.length) return false;

    for (let el of arr1) {
        if (counter1[el]) {
            counter1[el]++
        } else {
            counter1[el] = 1
        }
    }

    for (let el of arr2) {
        if (counter2[el]) {
            counter2[el]++
        } else {
            counter2[el] = 1
        }
    }

    for (let key in counter1) {
        if (counter2[key] === undefined) {
            return false
        } else if (counter2[key] !== counter1[key]) {
            return false
        }
    }

    return true
}

console.log(arraysEqual([1, 2, 2], [2, 1, 2]));
console.log(arraysEqual([1, 2, 2], [2, 1, 3]));
console.log(arraysEqual([1, 2, 2], [2, 1, 2, 1]));

// better solution below

function arraysEqual(arr1, arr2) {
    let counter = {};

    if (arr1.length !== arr2.length) {
        return false
    };

    for (let el of arr1) {
        if (counter[el]) {
            counter[el]++
        } else {
            counter[el] = 1
        }
    }

    for (let el of arr2) {
        if (!counter[el]) {
            return false
        } else {
            counter[el]--
        }
    }

    for (let key in counter) {
        if (counter[key] !== 0) {
            return false;
        }
    }

    return true
}

console.log(arraysEqual([1, 2, 2], [2, 1, 2]));
console.log(arraysEqual([1, 2, 2], [2, 1, 3]));
console.log(arraysEqual([1, 2, 2], [2, 1, 2, 1]));