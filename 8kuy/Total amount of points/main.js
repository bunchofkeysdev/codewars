function points(games) {
    let score = 0
    let newArr = []
    games.forEach((e) => {
        newArr = e.split(':')

        if (parseInt(newArr[0]) > parseInt(newArr[1])) {
            score += 3
        } else if (newArr[0] == newArr[1]) {
            score += 1
        } else score += 0

    })
    return (score)
}