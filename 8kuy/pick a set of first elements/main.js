function first(arr, n) {
    return n === 0 ? [] : n == undefined ? [arr[0]] : arr.slice(0, n)

}

// Second

function first(arr, n = 1) {
    return arr.slice(0, n);
}