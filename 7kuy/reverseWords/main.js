function reverseWords(str) {
    let reverse = []
    str.split(' ').forEach(e => reverse.push(e.split('').reverse().join("")))
    return reverse.join(' ')
}