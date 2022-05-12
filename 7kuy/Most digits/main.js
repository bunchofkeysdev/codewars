function findLongest(array) {
    let str = '0'
    array.forEach((e, i) => { if (e.toString().length > str.length) str = e.toString() })
    return +str
}