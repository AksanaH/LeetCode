// Given an array of integers, return a new array with each value doubled.

function maps(x) {
    let newArr = [];
    for (let i = 0; i < x.length; i++) {
        let doubled = x[i] * 2;
        newArr.push(doubled)
    }
    return newArr;
}

console.log(maps([1, 2, 3]));

//or

function maps(x) {
    return x.map(n => n * 2);
}