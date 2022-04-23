function stringy(size) {
    let arr = []
    for (let i = 0; i < size; i++) {
        i % 2 === 0 ? arr.push('1') : arr.push('0')
    }
    return arr.join('')
}