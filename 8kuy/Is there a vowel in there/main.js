function isVow(a) {
    return a.map(e => e == 97 || e == 101 || e == 105 || e == 111 || e == 117 ? String.fromCharCode(e) : e)
}