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

const rps = (p1, p2) => {
    if (p1 === "scissors" && p2 === "paper") {
        return "Player 1 won!";
    } else if (p1 === "rock" && p2 === "scissors") {
        return "Player 1 won!";
    } else if (p1 === "paper" && p2 === "rock") {
        return "Player 1 won!";
    }

    if (p1 === "scissors" && p2 === "rock") {
        return "Player 2 won!";
    } else if (p1 === "rock" && p2 === "paper") {
        return "Player 2 won!";
    } else if (p1 === "paper" && p2 === "scissors") {
        return "Player 2 won!";
    }

    if (p1 === "scissors" && p2 === "scissors") {
        return "Draw!"
    } else if (p1 === "rock" && p2 === "rock") {
        return "Draw!"
    } else if (p1 === "paper" && p2 === "paper") {
        return "Draw!";
    }
};

function duplicateCount(text) {
    //create a frequency object
    const frequencyMap = {};
    const duplicates = [];
    const correctText = text.toLowerCase();

    //count the frequency of characters
    for (const char of correctText) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }
    //collect characters that apppear more than once
    for (const char in frequencyMap) {
        if (frequencyMap[char] > 1) {
            duplicates.push(char)
        }
    }

    const duplicateCount = duplicates.length;
    return duplicateCount;
}
//Exes and Ohs
function XO(str) {
    //code here
    //count the instances of x and 0
    const obj = {};
    const strArr = str.toLowerCase();
    for (const char of strArr) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    //check if  X and O are equal
    if (obj.x == obj.o) {
        return true;
    }
    return false;
}
//Persistence Burger
//The task is to write a fucntion called persisntence
//which takes a positive interger as input which is more than single digit then
//I multiply the individual numbers in the double digit until I arrive to a single digit
//then I count the number of times I have multiplied until I arrived to a single digit
function persistence(num) {
    //code me
    //Turn the input into an array of individual numbers
    const numArr = String(num);
    let multiply = 1;
    //if the array has only one digit no need for further multiplication
    if (numArr.length === 1) {
        return 0;
    }
    for (let i = 0; i < numArr.length; i++) {
        //convet the number before multiplying
        multiply *= Number(numArr[i]);
    }

    //return the result of the count
    return 1 + persistence(multiply);
}