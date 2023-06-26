String.prototype.toJadenCase = function() {
    //...
    let words = this.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");

};

const quote = "How can mirrors be real if our eyes aren't real";
console.log(quote.toJadenCase());