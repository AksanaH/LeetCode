//Write a function reverse which reverses a list (or in clojure's case, 
// any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)


reverse = function (array) {
    let reversed = [];
    for (let i = 0; i < array.length; i++) {
        reversed = [array[i]].concat(reversed);
    }
    return reversed;
};


console.log(reverse([12, 'cat', 'dog']));