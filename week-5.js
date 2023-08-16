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

//write a function that reaturns both the smallest and 
//largest number of an array
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]; // fix me!
}

//Write a function that given a string it concatenates all odd numbers and all index numbers
//and also given a number it should repeat n times

function groupAndJoin(arr){
    const oddIndeces = [];
    const evenIndeces = [];

    for (let i = 0; i < arr.length; i++) {
        if (i%2 == 0) {
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