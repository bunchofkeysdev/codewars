function change(string) {
    const stringInLowerCase = string.toLowerCase()

    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .map(char => (stringInLowerCase.includes(char) ? 1 : 0))
        .join('')
}