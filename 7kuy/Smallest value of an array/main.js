function min(arr, toReturn) {
    return toReturn === 'index' ? arr.indexOf(Math.min(...arr)) : Math.min(...arr)
}

function min(arr, toReturn) {
    let min = Math.min(...arr)
    return toReturn === 'index' ? arr.indexOf(min) : min
}