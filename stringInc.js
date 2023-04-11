//function incrementString(strng) {
//    // return incrementedString
//    const matcher = strng.match(/^(\D*)(\d*)$/);
//
//    let alphaPart = matcher[1];
//    let numericPart = matcher[2];
//
//
//    if (numericPart == "") {
//        return `${alphaPart}1`;
//    } else {
//        numericPart = (parseInt(numericPart, 10) + 1).toString().padStart(numericPart.length, "0");
//        return `${alphaPart}${numericPart}`;
//    }
//}
//
//function incrementString(str) {
//    // match the non-digit substring at the beginning of the string
//    let prefix = str.match(/^[^\d]+/)[0];
//
//    // match the digit substring at the end of the string, or assume it's empty if none found
//    let suffix = str.match(/\d+$/) || ["0"];
//
//    // extract the matched suffix and pad it with leading zeros to the same length
//    let numStr = suffix[0];
//    let paddedNumStr = numStr.padStart(suffix[0].length, "0");
//
//    // convert the padded number string to an integer and increment it
//    let num = parseInt(paddedNumStr) + 1;
//
//    // convert the incremented number back to a string and append it to the prefix
//    let newSuffix = num.toString();
//    let result = prefix + newSuffix;
//
//    return result;
//}
function incrementString(str) {
    // Find the first non-numeric character from the end of the string
    let i = str.length - 1;
    while (i >= 0 && !isNaN(str.charAt(i))) {
        i--;
    }

    // Extract any numeric suffix from the string
    const suffix = str.substring(i + 1);

    // Extract the prefix (everything before the suffix)
    const prefix = str.substring(0, i + 1);

    // If there is no suffix, append "1" to the prefix to create the first increment
    if (suffix === "") {
        return prefix + "1";
    }

    // Otherwise, increment the numeric suffix
    const num = parseInt(suffix, 10) + 1;
    const paddedNum = num.toString().padStart(suffix.length, "0");
    return prefix + paddedNum;
}