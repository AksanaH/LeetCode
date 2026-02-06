function intersection(arr1, arr2) {
    let seen = {};
    let result = [];
    for (let el of arr1) {
        seen[el] = true
    }

    for (let el of arr2) {
        if (seen[el] && !result.includes(el)) {
            result.push(el)
        }
    }

    return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));