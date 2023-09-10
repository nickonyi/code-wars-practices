function findMultiples(integer, limit) {
    //your code here
    const multiples = [];

    for (let i = integer; i <= limit; i++) {
        if (i % integer == 0) {
            multiples.push(i);
        }
    }
    return multiples;
}

//tererrrer
//write function that takes a list and returns in reverse order
//input is a list of numbers
//output is a reverse list of numbers

function reverseList(list) {
    //take the input 
    const inputList = list;
    //reverse the input
    //store the reversed input
    const reverseInput = inputList.reverse()

    //output the srored input
    return reverseInput;
}


//given an array and a limit I should check if all values are greater than my limit
//if all values are I return true
//else If we any number not more than my limit I return false
function smallEnough(a, limit) {
    //Loop over the array to check evey number
    for (let i = 0; i < a.length; i++) {
        //if they exist a number which is greater than the limit I immediately return false 
        //and the search ends from there
        if (a[i] > limit) {
            return false;
        }

    }
    //else I return true
    return true;
}

//Given a string I reverse it and exclude none alphabetical characters
function reverseLetter(str) {
    //coding and coding..
    //convert the string to an array
    const strArr = str.split("");
    //Take the string array and reverse it
    const reverseStr = strArr.reverse();
    //Use a regular expression to remove all the non alphabetic characters
    const finalString = reverseStr.join("").replace(/[^a-zA-Z]/g, '');
    //return the resulting strings
    return finalString;

}


//Write a function which takes a string and returns the positions of capital letters in the string
var capitals = function(word) {
    // Write your code here
    //create an array to store the positions of the capital letters
    const indexArr = [];
    //loop over the string
    for (let i = 0; i < word.length; i++) {
        //if a word is capital add it's index to the index array
        if (word[i] === word[i].toUpperCase()) {
            indexArr.push(i);
        }
    }

    //return the index array
    return indexArr;
};