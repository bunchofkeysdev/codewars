function eachCons(array, n) {
    return array.map((e, i) => array.slice(i, i + n)).filter(e => e.length == n)

}