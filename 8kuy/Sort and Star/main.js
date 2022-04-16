function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

// second

function twoSort(s) {
    s = s.sort()[0].split('')
    for (let i = 0; i < s.length - 1; i++) {
        s[i] = s[i] + '***'
    }
    return s.join('')
}