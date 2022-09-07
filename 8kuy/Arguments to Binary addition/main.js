const arr2bin = arr => (arr.filter(e => typeof (e) === 'number').reduce((a, b) => a + b, 0)).toString(2)
