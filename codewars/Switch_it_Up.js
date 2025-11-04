//When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be
//  within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.
let message;
function switchItUp(number) {
    switch (number) {
        case 0:
            message = "Zero";
            break;
        case 1:
            message = "One";
            break;
        case 2:
            message = "Two";
            break;
        case 3:
            message = "Three";
            break;
        case 4:
            message = "Four";
            break;
        case 5:
            message = "Five";
            break;
        case 6:
            message = "Six";
            break;
        case 7:
            message = "Seven";
            break;
        case 8:
            message = "Eight";
            break;
        case 9:
            message = "Nine";
            break;
        default:
            message = "Please provide a number between 0-9";
    }
    return message;

}
switchItUp(1);
console.log(message);

switchItUp(5);
console.log(message);

switchItUp(7);
console.log(message);

switchItUp(77);
console.log(message);