var countSheep = function (num) {
    let str = ''
    if (num === 0) {
        return ''
    } else {
        for (let i = 1; i <= num; i++) {
            str += `${i} sheep...`
        }
    }
    return str
}
