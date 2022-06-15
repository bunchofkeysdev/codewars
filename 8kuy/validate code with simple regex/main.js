function validateCode(code) {
    code = code.toString().slice(0, 1)

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1' || code[i] === '2' || code[i] === '3') {
            return true

        }
    } return false
}