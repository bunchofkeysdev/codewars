function remove(string) {
    while (string[string.length - 1] === '!') {
        string = string.slice(0, -1)
    }
    return string
}