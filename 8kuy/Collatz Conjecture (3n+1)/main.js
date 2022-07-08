var hotpo = function (n) {
    let counter = 0

    if (n <= 1) return 0

    while (n > 1) {

        if (n % 2 === 0) {
            n = n / 2
            counter++

        } else {
            counter++
            n = 3 * n + 1

        }

    } return counter
}