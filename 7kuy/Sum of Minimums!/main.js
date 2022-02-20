const sumOfMinimums = arr => arr.map(e => Math.min(...e)).reduce((a, b) => a + b, 0)

// shorter
function sumOfMinimums(arr) {
    return arr.reduce((a, b) => a + Math.min(...b), 0);
}