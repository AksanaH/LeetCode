//Make a function that returns the value multiplied by 50 and increased by 6.
//If the value entered is a string it should return "Error".

function problem(x) {
    if (typeof x === 'string') {
        return "Error"
    }
    return x * 50 + 6
}

console.log(problem(2));
console.log(problem('2'));


//or

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;