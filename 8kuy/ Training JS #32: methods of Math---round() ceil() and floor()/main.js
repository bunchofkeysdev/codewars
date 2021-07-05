function roundIt(n) {
    let nStr = n.toString().split(".")
    let n1 = nStr[0]
    let n2 = nStr[1]

    return n1.length < n2.length ? Math.ceil(n) : n1.length > n2.length ? Math.floor(n) : Math.round(n)


}
// shorter
function roundIt(n) {
    var [a, b] = n.toString().split('.');
    return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}