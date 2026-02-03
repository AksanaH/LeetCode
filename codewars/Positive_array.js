function positiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(positiveNumbers([12, 0, -13, -3, 4]));

function positiveNumbers(arr) {
    return arr.filter(n => n > 0);
}

console.log(positiveNumbers([12, 0, -13, -3, 4]));


function doublePositive(arr) {
    return arr.filter(el => el > 0).map(elem => elem * 2);
}
console.log(doublePositive([12, 0, -13, -3, 4]));
