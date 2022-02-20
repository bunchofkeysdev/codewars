const sumOfMinimums = arr => arr.map(e => Math.min(...e)).reduce((a, b) => a + b, 0)
