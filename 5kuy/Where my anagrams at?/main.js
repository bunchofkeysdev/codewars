function anagrams(word, words) {
    let wordsIndex = []
    let sortedArray = words.map(e => e.split('').sort().join(''))
    let sortedWord = word.split('').sort().join('')
    sortedArray.forEach((e, i) => {
        if (e === sortedWord) {
            wordsIndex.push(i)
        }
    })
    return wordsIndex.map(e => words[e])
}

// shorter

let anagrams2 = (word, words) => {
    word = word.split('').sort().join('')
    return words.filter(w => w.split('').sort().join('') === word)

}