function getEvenNumbers(numbersArray) {
    return numbersArray.filter(e => e % 2 === 0)
}

// shorter
const getEvenNumbers = numbersArray => numbersArray.filter(e => e % 2 === 0)
