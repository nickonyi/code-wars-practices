function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    // return an array containing all of the strings in the input array except those that match strings in geese
    let filtereredBirds = birds.filter((bird) => {
        return geese.indexOf(bird) === -1;
    })

    return filtereredBirds;
};