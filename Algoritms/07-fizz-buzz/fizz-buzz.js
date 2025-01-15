// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number


let fizzBuzz = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum % 3 === 0 && currentNum % 5 === 0) {
            console.log("Fizz Buzz")
        } else if (currentNum % 3 === 0) {
            console.log("Fizz")
        } else if (currentNum % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(currentNum)
        }

    }
}

arr = [2, 6, 10, 12, 15, 45, 8];s
console.log(fizzBuzz(arr));