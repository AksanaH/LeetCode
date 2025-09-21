// Mr. despair wants to jump off Dutch act, So he came to the top of a building.

// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

// Input: floor, The height of the building (floor)

// Output: a string, The voice of despair(When jumping Dutch act)

// Example:
// sc(2) should return "Aa~ Pa! Aa!"
// sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

// sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

// if floor<=1, Mr. despair is safe, return ""


function sc(floor) {
    if (floor <= 1) {
        return ""
    }
    let scream = "";
    for (let i = 1; i < floor; i++) {
        scream += "Aa~ "
    }
    scream += "Pa!"

    if (floor <= 6) {
        scream += " Aa!"
    }
    return scream
}

console.log(sc(6));
console.log(sc(16));
console.log(sc(3));
console.log(sc(1));

