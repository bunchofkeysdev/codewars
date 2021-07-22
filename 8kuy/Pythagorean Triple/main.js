function isPythagoreanTriple(integers) {
    integers.sort((a, b) => b - a)
    return Math.pow(integers[0], 2) == Math.pow(integers[1], 2) + Math.pow(integers[2], 2)
}

// second
function isPythagoreanTriple(integers) {
    integers.sort((a, b) => b - a)
    return integers[0] ** 2 == integers[1] ** 2 + integers[2] ** 2
}