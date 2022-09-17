function checkExam(array1, array2) {
    let score = 0
    array2.forEach((e, i) => {
        if (e === array1[i]) {
            score += 4
        } else if (e === '') {
            score += 0
        } else if (e !== array1[i]) {
            score -= 1
        }
    })
    return score < 0 ? 0 : score
}