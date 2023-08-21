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


function encrypt(text,n){
    if(!text || n<=0) return text;
    while (n>0) {
    let answer = '';
    for (let i = 1; i < text.length; i+=2) {
        answer+= text[i];   
    }
    for (let i = 0; i < text.length; i+=2) {
        answer+=text[i];
    }
    text = answer;
    n--;
}

return text;
}

function decrypt(encryptedText,n) {
    if(!encryptedText || n<=0) return encryptedText;

    const answer = new Array(encryptedText.length);

    while (n > 0) {
        let j = 0;
        for (let i = 1; i < encryptedText.length; i+=2) {
            answer[i] = encryptedText[j++];
        }
        for (let i = 0; i < encryptedText.length; i+=2) {
            answer[i] = encryptedText[j++];
            
        }
        encryptedText = answer.join('');
        n--;
    }
    return encryptedText;
}

//Create a tribonacci function that given an array which contains
//a pattern of 3 elements is going to give the tribonacci sequence upto the nth element
function tribonacci(signature,n){
    //your code here
    if(n === 0){
        return [];
    }
    if(n === 1){
        return [1];
    }
    for (let i = 3; i <= n; i++) {
        signature[i] = signature[i-1]+signature[i-2]+signature[i-3];
    }

    return signature;
  }

  //refactored tribonacci
  function tribonacciI(signature,n){
    for (let i = 0; i < n-3; i++) {
        signature.push(signature[i]+signature[i+2]+signature[i+3]);
    }

    return signature.slice(0,n);
  }
  






    


