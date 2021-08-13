function multiply(number) {
    return number < 0 ? number * Math.pow(5, number.toString().length - 1) : number * Math.pow(5, number.toString().length)
}

//BETTER

function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}