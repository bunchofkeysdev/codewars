function accum(s) {
    let str = `${s[0]}`
    for (let i = 1; i < s.length; i++) {
        str = str + `-${s.charAt(i).toUpperCase()}${s[i].repeat(i).toLowerCase()}`
    }
    return str
}

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}