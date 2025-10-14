//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    let count = {};
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1
    }
    for (const num of arr) {
        if (count[num] === 1) {
            return Number(num)
        }
    }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));