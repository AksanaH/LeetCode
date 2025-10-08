//Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits to
//  create the highest possible number.

function descendingOrder(n) {
    let str = n.toString().split('');
    let sort = str.sort((a, b) => b - a);
    let sorted = Number(sort.join(''))
    return sorted
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));


//or

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));