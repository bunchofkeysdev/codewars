function calculator(a, b, sign) {
    if (typeof (a) === NaN || typeof (b) === NaN) {
        return 'unknown value'
    } else if (sign === '+') {
        return a + b
    } else if (sign === '-') {
        return a - b
    } else if (sign === '*') {
        return a * b
    } else if (sign === '/') {
        return a / b
    } else return 'unknown value'

}