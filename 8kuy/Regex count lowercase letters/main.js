function lowercaseCount(str) {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (lowerCase.includes(str[i])) {
            count++
        }

    } return count
}