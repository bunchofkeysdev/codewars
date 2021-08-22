function padIt(str, n) {
    let arr = str.split('')
    while (arr.length < n + str.length) {
        arr.unshift('*')
        arr.push('*')
    }
    if (arr.length === n + str.length) return arr.join('')
    else { arr.pop(); return arr.join('') }
}