function calculateAge(a, b) {
    if (a < b) {
        if (b - a === 1) {
            return "You are 1 year old."
        } else {
            return `You are ${b-a} years old.`;
        }
    } else if (a > b) {
        if (a - b === 1) {
            return "You will be born in 1 year.";
        }
        return `You will be born in ${a - b} years.`;
    } else if (a === b) {
        return "You were born this very year!";
    }

}

function isIsogram(str) {
    //...
    const strLowerCase = str.toLowerCase();

    const count = {};
    for (const ele of strLowerCase) {
        if (count[ele]) {
            return false;
        } else {
            count[ele] = 1;
        }
    }

    return true;

}

function sayHello(name, city, state) {

    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}