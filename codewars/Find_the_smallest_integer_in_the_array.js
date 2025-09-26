function findSmallestInt(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

console.log(findSmallestInt([1, 2, 3, -50]));
console.log(findSmallestInt([34, 2, 67]));