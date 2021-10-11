function firstToLast(str, c) {
    return str.search(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c)

}