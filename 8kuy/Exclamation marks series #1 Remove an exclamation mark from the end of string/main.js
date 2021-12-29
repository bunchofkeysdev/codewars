function remove(string) {

    return string.endsWith('!') ? string.slice(0, -1) : string
}

// second
function remove(string) {

    return string[string.length - 1] === '!' ? string.slice(0, -1) : string
}