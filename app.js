function longestConsec(strarr, k) {
    // your code
    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return "";
    }
    const concatenatedArray = [];
    let longestString = "";
    for (let i = 0; i < strarr.length - (k - 1); i++) {
        let concatenatedString = "";

        for (let j = 0; j < k; j++) {
            concatenatedString += strarr[j + i];
        }
        concatenatedArray.push(concatenatedString)
    }
    concatenatedArray.sort((a, b) => {
        return b.length - a.length;
    })

    concatenatedArray;
    longestString = concatenatedArray[0];
    return longestString;


}