function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

function divisors(n) {
    const divisors = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors;
}

function listSquared(m, n) {
    // your code
    //find all the intergers betwen m and n,such that the sum of its squared divisors is equal to a perfect square
    //initialize an array where we store our results
    const result = [];

    //loop fom m to n
    for (let num = m; num <= n; num++) {
        //find the sum of squared divisors
        const sumOfSquaredDivisors = divisors(num).reduce((sum, d) => sum + (d * d), 0);
        if (isSquare(sumOfSquaredDivisors)) {
            result.push([num, sumOfSquaredDivisors]);
        }

    }

    return result;
}

console.log(sumOfSquaredDivisors = divisors(241).reduce((sum, d) => sum + (d * d), 0));