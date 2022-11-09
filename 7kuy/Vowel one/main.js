function vowelOne(s) {
    return s.split('').map(e => e === 'a' || e === 'A' || e === 'e' || e === 'E' || e === 'i' || e === 'I' || e === 'O' || e === 'o' || e === 'u' || e === 'U' ? 1 : 0).join('')
}