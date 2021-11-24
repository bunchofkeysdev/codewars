function sumOfDifferences(arr) {
    let sum = 0;

    if (arr.length <= 1) {
        return 0
    } else {
        let sort = arr.sort((a, b) => (b - a))
        for (let i = 0; i < sort.length - 1; i++) {
            sum += sort[i] - sort[i + 1]

        }

    }
    return sum
}