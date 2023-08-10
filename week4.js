function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    // return an array containing all of the strings in the input array except those that match strings in geese
    let filtereredBirds = birds.filter((bird) => {
        return geese.indexOf(bird) === -1;
    })

    return filtereredBirds;
};

function sumStr(a, b) {

    const string1 = Number(a);
    const string2 = Number(b);
    const sum = string1 + string2;

    return String(sum);
}

function saleHotdogs(n) {
    if (n < 5) {
        return n * 100;
    } else if (n >= 5 && n < 10) {
        return n * 95;
    } else {
        return n * 90;
    }
}

function countPositivesSumNegatives(input) {
    // your code here
    //create the empty array
    const countArr = [];
    //create a count variable
    let count = 0;
    //create a sum variable
    let sum = 0;
    //looop through the array
    if (input.length === 0) {
        return input;
    }
    for (let i = 0; i < input.length; i++) {
        //check if the number is positive
        if (input[i] > 0) {
            count++;
        }

        if (input[i] < 0) {
            sum += input[i];
        }

    }
    countArr.push(count, sum);
    return countArr;
}

function grow(x) {
    return x.reduce((curr, prev) => {
        return curr * prev;
    }, 1);
}

function arithmetic(a, b, operator) {
    //your code here!
    //check the operator
    switch (operator) {
        case "add":
            return a + b;
            break;
        case "subtract":
            return a - b;
            break;
        case "multiply":
            return a * b;
            break;
        case "divide":
            return a / b;
            break;
    }


}

function nbDig(n, d) {
    // your code
    //create an empty array
    const squareRange = [];
    let k = 0;
    //create a loop squaring numbers between 0 and n
    for (let i = 0; i <= n; i++) {
        k = i * i;
        squareRange.push(k);
    }

    //create a count variable
    let count = 0;
    //loop over the squareRange array and loop to see numbers that contain 1

    squareRange.forEach(number => {
        const numberString = String(number);
        const regex = new RegExp(d, 'g')
        const occurrences = (numberString.match(regex) || []).length;

        count += occurrences;
    });

    return count;
}