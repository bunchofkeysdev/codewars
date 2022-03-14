function getRealFloor(n) {
    if (n === 0 || n === 1) {
        return 0
    } else if (n > 1 && n <= 12) {
        return n - 1
    } else if (n > 12) {
        return n - 2
    } else {
        return n
    }
}