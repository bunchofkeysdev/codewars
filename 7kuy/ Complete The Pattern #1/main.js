function pattern(n) {
    let output = "";
    if (n === 1) return "1"
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += i
        }
        output += '\n'
    }
    return output.slice(0, -1);
}