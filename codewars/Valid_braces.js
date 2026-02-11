function validBraces(str) {
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    const stack = [];

    for (let ch of str) {

        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {

            const last = stack.pop();
            if (last !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(validBraces("{[()]}"));
console.log(validBraces("([)]"));

