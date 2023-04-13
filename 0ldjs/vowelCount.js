function getCount(str) {
    let result;
    let joinWords = str.split(" ").join("");
    let lowerCase = joinWords.toLowerCase();
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (lowerCase[i] === "a" || lowerCase[i] === "e" || lowerCase[i] === "i" || lowerCase[i] === "o" || lowerCase[i] === "u") {
            count++;
        }

    }
    return count;
}