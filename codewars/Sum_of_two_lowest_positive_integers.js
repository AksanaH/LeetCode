// Create a function that returns the sum of the two lowest positive numbers given 
// an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.


let arr1 = [5, 22, 3, 6] //8
let arr2 = [-5, 22, 3, 6, 0] //-5


function sumTwoSmallestNumbers(numbers) {
    let sorted = numbers.sort((a, b) => {
        return a - b;
    });
    return sorted[0] + sorted[1]
}

console.log(sumTwoSmallestNumbers(arr1));
console.log(sumTwoSmallestNumbers(arr2));


