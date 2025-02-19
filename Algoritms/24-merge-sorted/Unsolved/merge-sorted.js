// Write code to merge two sorted arrays into a new sorted array

// O(n + m) time complexity
// Efficient & readable for interviews

// var mergeSorted = function (arr1, arr2) {
//     let mergedArr = [];

//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArr.push(arr1[i++])
//         } else {
//             mergedArr.push(arr2[j++]);
//         }
//     }
//     return mergedArr.concat(arr1.slice(i), arr2.slice(j))
// };

// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];
// const result = mergeSorted(array1, array2);
// console.log(result);


// Why is this Better?
// Concise & Readable: Just one line of code.
// Modern ES6+ Syntax: Uses the spread operator (...) and arrow functions.
// Works for Any Input: Handles cases where arrays might not be pre-sorted.
// Good for Small to Medium Data: Uses O((n + m) log(n + m)) time due to sorting.
const mergeSorted = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

console.log(mergeSorted(array1, array2)); 