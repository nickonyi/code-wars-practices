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