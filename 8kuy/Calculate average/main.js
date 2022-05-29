function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((e, a) => e + a, 0) / array.length

}