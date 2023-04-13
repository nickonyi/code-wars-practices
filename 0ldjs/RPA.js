function alphabetPosition(text) {
    // Algorithm
    // First I will get the inputted string from the user.
    // Then i am going to define a place where i will put my converted number

    let numberList = [];
    // I will loop through each character and convert into to capital
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase();
        // Then i will obtain its character code equivalent
        let charcode = char.charCodeAt(char);
        // if the character falls between A-Z  i will subtract 64 from every character code before I put into to our final array.
        if (char >= "A" && char <= "Z") {
            numberList.push(charcode - 64);
        }
    }

    // Then i will join every those characters.
    const numberString = numberList.join(" ");
    return numberString;
}