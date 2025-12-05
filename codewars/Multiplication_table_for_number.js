// Your goal is to return multiplication table for number that is always an integer from 
// 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10

function multiTable(number) {
    let result = [];

    for (let i = 1; i <= 10; i++) {
        result.push(`${i} * ${number} = ${i * number}`);
    }

    return result.join("\n");
}

console.log(multiTable(5));
console.log(multiTable(2));
