function correct(string) {
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '5') {
            string[i] = ('S')
        } else if (string[i] === '0') {
            string[i] = ('O')
        } else if (string[i] === '1') {
            string[i] = ('I')
        }
    } return string.join('')
}

// second

function correct(string) {
    let arr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '5') {
            arr.push('S')
        } else if (string[i] === '0') {
            arr.push('O')
        } else if (string[i] === '1') {
            arr.push('I')
        } else {
            arr.push(string[i])
        }
    } return arr.join('')
}