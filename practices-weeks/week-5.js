//Write a function that returns the sum of a series where the
//numerator is one and the denominator increases by three for each subsequent number to the nth place(which is the parameter)
//the result should be roudnd of to the nearest 2 decimal places and should be a string
//The series:1+1/4+
function SeriesSum(n) {
    // Happy Coding ^_^
    //variable for numerator
    const numer = 1;
    //variable for denominator
    let denom = 1;
    //array for holding the sequences
    const sequenceArr = [];
    //add the sequence into the array
    for (let i = 0; i < n; i++) {
        let fraction = numer / denom;
        sequenceArr.push(fraction);
        denom += 3;
    }
    //add the elements in the array
    const sequenceSum = sequenceArr.reduce((cumm, curr) => cumm + curr, 0);
    return sequenceSum.toFixed(2);

}


//Given an array calculate the average including your own points and compare if it is
//better or worse than yours
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    classPoints.push(yourPoints);

    const classSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classSum / classPoints.length;
    if (yourPoints > classAverage) {
        return true;
    }
    return false;
}

//double every item in the array
function maps(x) {
    const doubleArr = [];
    for (let i = 0; i < x.length; i++) {
        doubleArr.push(x[i] * 2);
    }
    return doubleArr;
}

//Given an array with three numbers I should return the index of the
//number that falls between the other two numbers
function gimme(triplet) {
    let index = 0;
    let min = Math.min(...triplet);
    let max = Math.max(...triplet);
    for (let i = 0; i < triplet.length; i++) {
        if (triplet[i] !== max && triplet[i] !== min) {
            index = i;
        }

    }
    return index;
}
//write a function that reaturns both the smallest and 
//largest number of an array
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]; // fix me!
}

//Write a function that given a string it concatenates all odd numbers and all index numbers
//and also given a number it should repeat n times

function groupAndJoin(arr) {
    const oddIndeces = [];
    const evenIndeces = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            evenIndeces.push(arr[i]);
        } else {
            oddIndeces.push(arr[i]);
        }
    }
    const fullText = oddIndeces.concat(evenIndeces);
    return fullText.join('');
}

function encrypt(text, n) {
    let result = text;
    for (let i = 0; i < n; i++) {
        result = groupAndJoin(result);
    }
    return result;
}

function reverseGroupAndJoin(arr) {
    const joinedArray = [];

    // Join even and odd indices
    for (let i = 0; i < arr.length / 2; i++) {
        joinedArray.push(arr[i + Math.ceil(arr.length / 2)]);
        joinedArray.push(arr[i]);
    }

    return joinedArray.join("");
}

function decrypt(encryptedText, n) {
    let result = encryptedText;
    for (let i = 0; i < n; i++) {
        result = reverseGroupAndJoin(result);
    }
    return result;
}

function reverseCharactersInGroups(inputString) {
    const arr = inputString.split('');

    for (let i = 0; i < arr.length; i += 4) {
        const endIndex = Math.min(i + 2, arr.length);
        const group = arr.slice(i, endIndex);
        group.reverse();

        for (let j = 0; j < group.length; j++) {
            arr[i + j] = group[j];
        }
    }

    return arr.join('');
}
const text = '012345';
const encrypted = encrypt(text, 2);
console.log(encrypt(text, 2));
console.log(decrypt(encrypted, 2));


function sumArray(array) {
    if (array === undefined || array === null || array.length <= 1) {
        return 0;
    }


    const min = Math.min(...array);
    const max = Math.max(...array);

    const sum = array.reduce((a, b) => a + b, 0);

    return sum - (min + max);
}

//Given a number of petals my goal is to determine what is going to be said last
function howMuchILoveYou(nbPetals) {
    // your code
    //Array to hold the phrases to be said
    const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

    if (nbPetals > phrases.length) {
        const index = (nbPetals - 1) % phrases.length;
        return phrases[index];
    }
    return phrases[nbPetals - 1]
}