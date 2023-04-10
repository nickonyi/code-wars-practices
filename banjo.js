function areYouPlayingBanjo(name) {
    // Implement me
    let word = name.toLowerCase();
    if (word[0] === "r") {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo";
    }
}