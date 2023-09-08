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