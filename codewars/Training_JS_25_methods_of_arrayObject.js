// Coding in function sortIt. function accept 1 parameters arr, it's a number 
// array. Your task is to sort the array according to the specified conditions, 
// and returns a new array(should not modify the original array).

// conditions1: according to the number of elements(in ascending order) for example:

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1

function sortIt(arr) {
    let copy = arr.slice(); // don’t change original

    copy.sort((a, b) => {
        let countA = arr.filter(x => x === a).length;
        let countB = arr.filter(x => x === b).length;

        if (countA === countB) {
            return b - a; // value descending when frequency is equal
        }
        return countA - countB; // frequency ascending
    });

    return copy;

}

console.log(sortIt([1, 1, 1, 2, 2, 3]));
console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
