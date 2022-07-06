function drawStairs(n) {
    let stairs = 'I'
    for (let i = 1; i < n; i++) {
        stairs += '\n' + ' '.repeat(i) + 'I'
    }
    return stairs
}