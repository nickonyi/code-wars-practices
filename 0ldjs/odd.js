function oddOrEven(array) {
    //enter code here
    const sum = array.reduce(function(accumulation, previous) {
        return accumulation + previous;
    }, 0);
    if (sum % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}