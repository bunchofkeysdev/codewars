function divCon(x) {
    let str = x.filter(e => typeof e === 'string')
    let num = x.filter(e => typeof e === 'number')
    return num.reduce((a, b) => a + b, 0) - str.reduce((a, b) => a + +b, 0)

}