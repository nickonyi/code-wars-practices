//create an array
//Am going to loop over the given input and every time I get a certain letter
//I replace it with another one
function DNAStrand(dna) {
    //your code here
    const complementStrand = [];

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            dna[i] = "T";
            complementStrand.push(dna[i] = "T");
        } else if (dna[i] === "T") {
            complementStrand.push(dna[i] = "A");
        } else if (dna[i] === "C") {
            complementStrand.push(dna[i] = "G");
        } else if (dna[i] === "G") {
            complementStrand.push(dna[i] = "C")
        }
    }
    const joinedStrand = complementStrand.join("");
    return joinedStrand;
}