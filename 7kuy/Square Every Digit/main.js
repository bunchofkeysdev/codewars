function squareDigits(num) {
    let num2 = [];
    num.toString().split('').forEach(e => (num2.push(Number(Math.pow(e, 2)))));
    return Number(num2.join(""))
}