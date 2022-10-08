function pattern(n) {
    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += i
        }
        output += '\n'
    }
    return output.slice(0, -1);
}