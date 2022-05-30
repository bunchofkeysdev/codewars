// first

function strCount(str, letter) {
    return str.split('').filter(e => e === letter).length
}

// second

function strCount(str, letter) {
    let count = 0
    str.split('').forEach(e => { if (e === letter) count++ })
    return count
}