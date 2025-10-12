function zero(arg) {
    if (!arg) {
        return 0;
    }

    return calc(zero(), arg);
}
function one(arg) {
    if (!arg) {
        return 1;
    }

    return calc(one(), arg);
}
function two(arg) {
    if (!arg) {
        return 2;
    }

    return calc(two(), arg);
}
function three(arg) {
    if (!arg) {
        return 3;
    }

    return calc(three(), arg);
}
function four(arg) {
    if (!arg) {
        return 4;
    }

    return calc(four(), arg);
}
function five(arg) {
    if (!arg) {
        return 5;
    }

    return calc(five(), arg);
}
function six(arg) {
    if (!arg) {
        return 6;
    }

    return calc(six(), arg);
}
function seven(arg) {
    if (!arg) {
        return 7;
    }

    return calc(seven(), arg);
}

function eight(arg) {
    if (!arg) {
        return 8;
    }

    return calc(eight(), arg);
}
function nine(arg) {
    if (!arg) {
        return 9;
    }

    return calc(nine(), arg);
}

function plus(arg) {

    return "+" + arg;

}
function minus(arg) {
    return "-" + arg;

}
function times(arg) {
    return "*" + arg;

}
function dividedBy(arg) {
    return "/" + arg;

}

function calc(arg1, arg2) {
    if (arg2[0] === '*') {
        return arg1 * parseInt(arg2[1]);
    }
    if (arg2[0] === '/') {
        return parseInt(arg1 / parseInt(arg2[1]));
    }
    if (arg2[0] === '-') {
        return arg1 - parseInt(arg2[1]);
    }
    if (arg2[0] === '+') {
        return arg1 + parseInt(arg2[1]);
    }
}

console.log(seven(times(five())));
console.log(five(minus(five())));