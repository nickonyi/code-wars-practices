function solution(str, ending) {
    return str.endsWith(ending);
}

var isSquare = function(n) {
    if (n >= 0) {
        let squareroot = Math.sqrt(n);
        return Math.round(squareroot) * Math.round(squareroot) === n;
    } else {
        return false;
    }
}

function validatePIN(pin) {

    var regex = /^(\d{4}|\d{6})$/;


    if (regex.test(pin)) {
        return true;
    }

    return false;
}
//function descending order