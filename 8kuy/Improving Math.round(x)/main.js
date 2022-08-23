Math.roundTo = function (number, precision) {
    return precision > number.toString().length ? Math.round(number) : +number.toFixed(precision)
}