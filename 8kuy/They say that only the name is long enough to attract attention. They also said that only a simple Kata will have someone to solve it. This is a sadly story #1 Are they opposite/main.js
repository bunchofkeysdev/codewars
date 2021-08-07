function isOpposite(s1, s2) {
    let test = []
    if (s1.length < 1 || s2.length < 1) {
        return false
    } else {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] === s1[i].toUpperCase()) {
                test.push(s1[i].toLowerCase())
            } else {
                test.push(s1[i].toUpperCase())
            }
        }
    }
    if (test.join('') === s2) {
        return true
    } else return false

}