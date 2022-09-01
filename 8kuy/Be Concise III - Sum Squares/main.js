const sumSquares = array => array.map(e => e ** 2).reduce((a, b) => b + a)

// longer
function sumSquares(array) {
    var result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i] ** 2;
    }
    return result;
}

// better
function sumSquares(array) {
    return array.reduce((a, b) => a + b ** 2, 0);
}