function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (sq >= 0) {
        const squareRoot = Math.sqrt(sq);
        if (Math.floor(squareRoot) * Math.floor(squareRoot) == sq) {
            const nextSquare = squareRoot + 1;
            return nextSquare * nextSquare;
        }
    }
    return -1;
}


const binaryArrayToNumber = arr => {
    // your code
    const binaryString = arr.join('');

    const decimalNumber = parseInt(binaryString, 2);

    return decimalNumber;
};


function filter_list(l) {
    // Return a new array with the strings filtered out
    const filteredList = l.filter(item => {
        return typeof item === "number";
    });

    return filteredList;
}

function bouncingBall(h, bounce, window) {
    // your code here
    if (h < 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    let count = 0;
    while (h > window) {
        count++;
        h *= bounce;
        if (h > window) {
            count++
        }
    }
    return count;
}

function accum(s) {
    // your code
    let result = [];
    for (let i = 0; i < s.length; i++) {
        const repeatedChar = s[i].repeat(i + 1);
        const modifiedChar = repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1).toLowerCase();

        result.push(modifiedChar);
    }
    const finalResult = result.join('-');

    return finalResult;
}


function removeChar(str) {
    //You got this!
    if (str < 2) {
        return "";
    }

    const result = str.substring(1, str.length - 1);
    return result;
};

function arrayDiff(a, b) {
    const filterArray = a.filter(item => !b.includes(item));
    return filterArray;
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    let maximumDistance = mpg * fuelLeft;

    if (maximumDistance >= distanceToPump) {
        return true;
    } else {
        return false;
    }
}


function feast(beast, dish) {

    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true
    } else {
        return false;
    }
}

function digPow(n, p) {
    // ...
    let numberString = n.toString();
    let numberArray = numberString.split('').map(Number);

    let sumNumber = 0;
    for (let i = 0; i < numberArray.length; i++) {
        sumNumber += numberArray[i] ** p;
        p++;
    }



    for (let k = 1; k <= sumNumber / n; k++) {

        if (n * k === sumNumber) {
            return k;
        }
    }

    return -1;
}


function longestConsec(strarr, k) {
    // your code
    console.log(strarr);
    //const stringAttach = [];
    //for (let i = 0; i < strarr.length - 1; i = +2) {
    //    stringAttach.push(strarr[i] + strarr[i + 1]);
    //
    //}
    //return stringAttach;
}