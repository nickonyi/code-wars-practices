var maxSequence = function(arr) {
    // ...
    let maxSum = arr[0];
    let currSum = arr[0];
    let start = 0;
    let end = 0;
    let maxStart = 0;
    let maxEnd = 0;
    //If the array is empty return 0
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currSum + arr[i]) {
            start = i;
        }

        currSum = Math.max(arr[i], arr[i] + currSum);

        if (currSum > maxSum) {
            maxSum = currSum;
            end = i;
            maxStart = start;
            maxEnd = end;
        }

    }
    return Math.max(maxSum, 0);
}

const a = [-2, -3, 4, -1, -2, 1, 5, -3];
const b = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const c = [-2, -1, -3, -4, -1, -2, -1, -5, -4];
console.log(maxSequence(c));

function rentalCarCost(d) {
    // Your solution here
    //if you rent 7 or more days you get $50 of yout total
    if (d >= 7) {
        return (d * 40) - 50;
        //if you rent 3 or more days you get $20 of your total
    } else if (d >= 3) {
        return (d * 40) - 20;
        //every day is $40 dollars
    } else {
        return d * 40;
    }
}

const areaOrPerimeter = function(l, w) {
    // Return your answer
    //check if it is a rectangle or a square
    if (l == w) {
        return l * w
    } else {
        return 2 * (l + w);
    }
    //if it is a square return the area
    //if it is a rectangle return the perimeter
};

function sum(numbers) {
    "use strict";
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
};

function squareDigits(num) {
    //turn the numbers into a string of numbers
    const stringNum = String(num);
    //create an empty array to push the square Number
    const squareNums = [];
    //obtain each number and square each number
    for (let i = 0; i < stringNum.length; i++) {
        squareNums.push(Math.pow(stringNum[i], 2));
    }
    //rejoin them
    const joinNums = squareNums.join("");
    //convert the string of numbers back to numbers
    return Number(joinNums, 10);
}