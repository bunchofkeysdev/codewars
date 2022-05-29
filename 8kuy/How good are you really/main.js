function betterThanAverage(classPoints, yourPoints) {
    let total = classPoints.reduce((a, b) => a + b, 0) + yourPoints
    return total / (classPoints.length + 1) < yourPoints ? true : false
}