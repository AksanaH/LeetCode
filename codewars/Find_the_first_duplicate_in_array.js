function firstDuplicate(arr) {
    let seen = {};
    for (let el of arr) {
        if (seen[el]) {
            return el;
        } else {
            seen[el] = true;
        }
    }
    return null;
}

console.log(firstDuplicate([1, 2, 3, 2, 3]));