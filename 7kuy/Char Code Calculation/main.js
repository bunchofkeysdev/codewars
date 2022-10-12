function calc(x) {
    let total = x.split('').map((e, i) => e.charCodeAt(0)).join('')
    let total2 = ''
    for (let i = 0; i < total.length; i++) {
        if (total[i] === '7') {
            total2 += 1
        } else total2 += total[i]
    }
    return total.split('').map(e => +e).reduce((a, b) => a + b, 0) - total2.split('').map(e => +e).reduce((a, b) => a + b, 0)
}
