function opposite(number) {
    //your code here
    if (typeof number == 'undefined') {
        return 0;
    } else if (number > 0) {
        return number * -1;
    } else if (number < 0) {
        return number * -1;
    } else if (number === 0) {
        return 0;
    }
}