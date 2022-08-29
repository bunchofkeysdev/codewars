function isIsogram(str) {
    str = str.toLowerCase()
    let hash = [];
    for (let i = 0; i < str.length; i++) {
        if (hash.includes(str[i])) {
            return false
        } else {
            hash.push(str[i])
        }
    } return true
}