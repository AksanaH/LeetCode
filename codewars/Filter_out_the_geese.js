//Write a function that takes a list of strings as an argument and returns a 
// filtered list containing the same elements but with the 'geese' removed.

let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];


function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newArr = birds.filter(bird => !geese.includes(bird));
    return newArr
};

console.log(gooseFilter(birds));