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