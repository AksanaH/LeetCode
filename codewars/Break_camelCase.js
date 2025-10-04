// Complete the solution so that the function will
// break up camel casing, using a space between words.

function solution(str) {
    return str.replace(/([A-Z])/g, ' $1');
}

console.log(solution('camelCase'));
console.log(solution("identifier"));
console.log(solution("helloWorldAgain"));
console.log(solution("XMLHttpRequest"));