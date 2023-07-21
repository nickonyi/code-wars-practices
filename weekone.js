//create an array
//Am going to loop over the given input and every time I get a certain letter
//I replace it with another one
function DNAStrand(dna) {
    //your code here
    const complementStrand = [];

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            dna[i] = "T";
            complementStrand.push(dna[i] = "T");
        } else if (dna[i] === "T") {
            complementStrand.push(dna[i] = "A");
        } else if (dna[i] === "C") {
            complementStrand.push(dna[i] = "G");
        } else if (dna[i] === "G") {
            complementStrand.push(dna[i] = "C")
        }
    }
    const joinedStrand = complementStrand.join("");
    return joinedStrand;
}

function queueTime(customers, n) {
    //TODO
    const tills = Array(n).fill(0);
    for (let customer of customers) {
        const shortestTillIndex = tills.indexOf(Math.min(...tills));
        tills[shortestTillIndex] += customer;
    }
    const totalCheckOutTime = Math.max(...tills);

    return totalCheckOutTime;
}

function strCount(str, letter) {
    //code here
    //initialize a variable called count
    let count = 0;
    //loop through the string and compare each letter i the string
    //with the letter that we have been given
    for (let i = 0; i < str.length; i++) {
        //if we find letterrs that march we increase count
        if (str[i] === letter) {
            count++;
        }
    }
    //after the loop has finished we return count
    return count;
}

function getDivisorsCnt(n) {
    let count = 0;
    // Loop through numbers up to the square root of n
    for (let i = 1; i <= Math.sqrt(n); i++) {
        // If i is a divisor of n, we increment the count
        if (n % i === 0) {
            // If i is the square root of n, we increment the count by 1
            // Otherwise, we increment the count by 2 (considering both i and n/i as divisors)
            count += (i === Math.sqrt(n)) ? 1 : 2;
        }
    }
    return count;
}

function findNeedle(haystack) {
    // your code here
    //loop throught the array
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            const index = haystack.indexOf(haystack[i]);
            return `found the needle at position ${index}`;
        }

    }
    //compare each value with the value needle
    //return index of the value
    //return message got the value plus the index
}