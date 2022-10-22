function tidyNumber(n) {
    n = n.toString().split('')
    return n.filter((e, i) => e > n[i + 1]).length === 0
}