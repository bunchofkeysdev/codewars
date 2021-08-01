function charFreq(message) {
    let counts = {};
    [...message].forEach(x => counts[x] ? counts[x]++ : counts[x] = 1);
    return counts;
}