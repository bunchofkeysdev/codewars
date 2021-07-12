function bigToSmall(arr) {
    let array = [].concat(...arr)
    return array.sort((a, b) => b - a).join('>')

}