function firstToLast(str, c) {
    return str.search(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c)

}

// second
function firstToLast(str, c) {
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    return first == -1 ? -1 : last - first;
}