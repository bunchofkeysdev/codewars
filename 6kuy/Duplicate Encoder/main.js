function duplicateEncode(word) {
    word = word.toLowerCase().split('')
    let duplicates = word.filter((item, index) => index !== word.indexOf(item));

    return word.map(e => duplicates.includes(e) ? ')' : '(').join('')
}
