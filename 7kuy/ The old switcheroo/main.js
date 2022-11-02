function vowel2index(str) {
    let str2 = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A' || str[i] === 'e' || str[i] === 'E' || str[i] === 'o' || str[i] === 'O' || str[i] === 'I' || str[i] === 'i' || str[i] === 'u' || str[i] === 'U') {
            str2 += i + 1
        } else {
            str2 += str[i]
        }
    } return str2
}
