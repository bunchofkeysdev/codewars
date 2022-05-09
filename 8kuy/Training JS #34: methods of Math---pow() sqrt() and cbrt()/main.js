function cutCube(volume, n) {
    return Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume / n))

}