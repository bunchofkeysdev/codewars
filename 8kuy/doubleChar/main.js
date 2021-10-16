function doubleChar(str) {
    let double = []
    for (let i = 0; i < str.length; i++) {
        double.push(str[i].repeat(2))

    }
    return double.join("")
}
