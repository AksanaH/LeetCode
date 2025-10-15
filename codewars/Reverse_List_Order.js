// In this kata you will create a function that takes in a list and returns a list with the
//  reverse order.

function reverseList(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        let current = list[i];
        reversedList.push(current);
    }
    return reversedList
}