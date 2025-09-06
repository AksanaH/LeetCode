// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    let everyHour = 0.5;

    if (time <= 1.5) {
        result = 0;
    } else {
        result = Math.floor(time * everyHour)
    }
    return result;
}

console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));

