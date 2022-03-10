function shortcut(string) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let str = []

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            str.push('')
        } else if (string[i] === 'e') {
            str.push('')
        } else if (string[i] === 'i') {
            str.push('')
        } else if (string[i] == 'o') {
            str.push('')
        } else if (string[i] === 'u') {
            str.push('')
        } else {
            str.push(string[i])
        }
    }
    return str.join('')
}