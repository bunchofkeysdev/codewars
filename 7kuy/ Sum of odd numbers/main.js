function rowSumOddNumbers(n) {
    return n === 1 ? 1 : n * n * n
}

// shorter

const rowSumOddNumbers = n => n * n * n

// math
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}