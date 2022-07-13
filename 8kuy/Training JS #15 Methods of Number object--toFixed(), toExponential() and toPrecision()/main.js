function howManySmaller(arr, n) {
    return arr.map(e => e.toFixed(2)).filter(e => e < n).length

}

// second
function howManySmaller(arr, n) {
    return arr.filter(x => +x.toFixed(2) < n).length;
}