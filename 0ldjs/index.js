//var countSheep = function(num) {
//    //your code here
//    if (num < 0) {
//        return "Non-negative number not allowed";
//    } else {
//        let result = "";
//        for (i = 1; i <= num; i++) {
//            result += `${i} sheep...`;
//        }
//        return result;
//    }
//}
function toWeirdCase(string) {
    let output = "";
    let inWord = false;
    let curIndex = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);

        if (/\s/.test(char)) {
            output += char;
            inWord = false;
            curIndex = 0;
        } else {
            if (!inWord) {
                inWord = true;
                curIndex = 0;
            }

            if (char === char.toUpperCase()) {
                output += char;
            } else if (curIndex % 2 === 0) {
                output += char.toUpperCase();
            } else {
                output += char.toLowerCase();
            }

            curIndex++;
        }
    }

    return output;
}