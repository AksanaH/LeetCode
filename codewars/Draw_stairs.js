//Given a number n, draw stairs using the letter "I", 
// n tall and n wide, with the tallest in the top left.

function drawStairs(n) {
    let out = "";

    for (let row = 0; row < n; row++) {
        // add spaces before the "I"
        for (let s = 0; s < row; s++) {
            out += " ";
        }
        out += "I"; // place the "I"

        // add newline (not after the last row)
        if (row < n - 1) out += "\n";
    }

    return out;
}

// Example
console.log(drawStairs(3));