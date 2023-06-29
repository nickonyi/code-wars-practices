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
function descendingOrder(n) {
    //...
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    let digits = n.toString().split('');
    let sortedDigits = digits.sort((a, b) => {
        return b - a;
    });
    let sortedNumber = parseInt(sortedDigits.join(""), 10);
    return sortedNumber;


}

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n * m;
    }
}

function setAlarm(employed, vacation) {
    if (employed == true && !vacation) {
        return true;
    } else {
        return false;
    }
}

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

function getGrade(s1, s2, s3) {
    // Code here
    const score = (s1 + s2 + s3) / 3;

    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    }
}


//function towerBuilder(nFloors) {
//    let tower = [];
//    let maxWidth = 2 * nFloors - 1;
//    for (let i = 0; i < nFloors; i++) {
//        let spaces = " ".repeat(nFloors - i - 1);
//        let blocks = "*".repeat(2 * nFloors + 1);
//        let floor = spaces + blocks + spaces;
//        tower.push(floor);
//    }
//    return tower;
//}
//
//var numFloors = 3;
//var tower = buildTower(numFloors);
//console.log(tower);
//
//function buildTower(floors) {
//    var tower = [];
//
//    for (var i = 0; i < floors; i++) {
//        var spaces = " ".repeat(floors - i - 1);
//        var blocks = "*".repeat(2 * i + 1);
//        var floor = spaces + blocks + spaces;
//        tower.push(floor);
//    }
//
//    return tower;
//}
//
//// Example usage
//var numFloors = 3;
//var tower = buildTower(numFloors);
//console.log(tower);


function towerBuilder(nFloors) {
    let tower = [];

    for (let i = 0; i < nFloors; i++) {
        let spaces = " ".repeat(nFloors - i - 1);
        let blocks = "*".repeat(2 * i + 1);
        let floor = spaces + blocks + spaces;
        tower.push(floor);
    }
    return tower;
}


//return the total number of smiling faces in the array
function countSmileys(arr) {
    let validEyes = [':', ';'];
    let validNose = ['-', '~'];
    let validMouth = [')', 'D'];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const face = arr[i];
        if (face.length === 2 && validEyes.includes(face[0]) && validMouth.includes(face[1]) ||
            face.length === 3 && validEyes.includes(face[0]) && validNose.includes(face[1]) && validMouth.includes(face[2])
        ) {
            count++;
        }
    }
    return count;
}

function openOrSenior(data) {
    let output = [];
    for (let i = 0; i < data.length; i++) {
        const [age, handicap] = data[i];
        if (age >= 55 && handicap > 7) {
            output.push('senior');
        } else {
            output.push('open');
        }
    }
    return output;
}