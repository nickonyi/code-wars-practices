function friend(friends) {
    //your code here
    const amigos = friends.filter(friend => friend.length === 4);
    return amigos;
}

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    //flat array
    const flat = array.flat();
    //sort the array
    const sortedArray = flat.sort((a, b) => a - b);
    return sortedArray;
}

function calculateYears(principal, interest, tax, desired) {
    // your code
    //Determine amount to be invested
    let Y = 0;
    while (principal < desired) {
        principal = principal + ((principal * interest) - (principal * interest * tax));
        Y++;
    }

    return Y;
}