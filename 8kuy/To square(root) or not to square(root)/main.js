function squareOrSquareRoot(array) {
    return array.map(e => {
        return Math.sqrt(e) % 1 === 0 ? Math.sqrt(e) : Math.pow(e, 2)
    });
}


//  Second
function squareOrSquareRoot(array) {
    return array.map(e => {
        return Math.sqrt(e) === Math.floor(Math.sqrt(e)) ? Math.sqrt(e) : Math.pow(e, 2)
    });
}