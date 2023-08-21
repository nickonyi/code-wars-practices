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