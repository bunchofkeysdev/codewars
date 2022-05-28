function countPositivesSumNegatives(input) {

    let count = 0;
    let sum = 0;

    if (input === null || input.length === 0) {
        return []
    } else {
        input.forEach(e => e > 0 ? count++ : sum += e)
    }
    return [count, sum]
}
