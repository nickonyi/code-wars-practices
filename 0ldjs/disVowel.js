function disemvowel(str) {
    let regExp = /[aeiou]/gi;
    let result = str.replace(regExp, "");
    return result;
}