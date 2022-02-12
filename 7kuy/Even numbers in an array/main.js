function evenNumbers(array, number) {
    return array.filter((e, i) => e % 2 === 0).slice(-number)
}