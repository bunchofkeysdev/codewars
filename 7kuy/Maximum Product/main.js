function adjacentElementsProduct(array) {
    let newArray = array.map((a, b) => a * array[b + 1])
    newArray.pop()
    return Math.max(...newArray)
}