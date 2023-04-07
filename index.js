var countSheep = function(num) {
    //your code here
    if (num < 0) {
        return "Non-negative number not allowed";
    } else {
        let result = "";
        for (i = 1; i <= num; i++) {
            result += `${i} sheep...`;
        }
        return result;
    }
}