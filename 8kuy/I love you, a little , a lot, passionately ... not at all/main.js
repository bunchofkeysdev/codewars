function howMuchILoveYou(nbPetals) {

    let phrase = {
        0: "not at all",
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly"
    }
    return phrase[nbPetals % 6]

}

// second

function howMuchILoveYou(nbPetals) {

    if (nbPetals % 6 === 1) {
        return 'I love you'
    } else if (nbPetals % 6 === 2) {
        return 'a little'
    } else if (nbPetals % 6 === 3) {
        return 'a lot'
    } else if (nbPetals % 6 === 4) {
        return 'passionately'
    } else if (nbPetals % 6 === 5) {
        return 'madly'
    } else {
        return 'not at all'
    }

}