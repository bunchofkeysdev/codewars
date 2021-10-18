function sumMul(n, m) {
    let arr = []
    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            arr.push(i)
        }
    }
    return arr.length > 1 ? arr.reduce((a, b) => a + b, 0) : 'INVALID'
}