const moveZeros = arr => arr.filter(e => e !== 0).concat(arr.filter(e => e === 0))

// second
var moveZeros2 = function (arr) {
    return [
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
}