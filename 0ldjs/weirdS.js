function toWeirdCase(string) {
    let output = "";
    let currIndex = 0;
    let inWord = false;

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);

        if (/\s/.test(char)) {
            output += char;
            inWord = false;
            currIndex = 0;

        } else {
            if (!inWord) {
                inWord = true;
                currIndex = 0;
            }
            if (char === char.toUpperCase()) {
                output += char;
            } else if (currIndex % 2 === 0) {
                output += char.toUpperCase();
            } else {
                output += char.toLowerCase();
            }
            currIndex++;

        }



    }
    return output;

}