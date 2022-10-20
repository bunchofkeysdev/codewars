const repeats = arr => arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((a, e) => a + e, 0)
