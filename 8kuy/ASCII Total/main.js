function uniTotal(string) {
    string = Array.from(string)
    return string.length < 1 ? 0 : string.map((e, i) => e.charCodeAt(0)).reduce((a, b) => a + b, 0)
}