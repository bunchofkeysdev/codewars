function remove(string) {

    while (string.includes('!')) {
        string = string.replace('!', '')
    }
    return string + '!'
}
