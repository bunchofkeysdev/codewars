const smallEnough = (a, limit) => a.every(e => e <= limit)

// second
function smallEnough(a, limit) {
    return Math.max(...a) <= limit
}