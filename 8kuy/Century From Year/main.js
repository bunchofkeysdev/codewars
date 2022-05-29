function century(year) {
    let century = 1;
    for (let i = year; i > 100; i -= 100) {
        century++
    }
    return century
}