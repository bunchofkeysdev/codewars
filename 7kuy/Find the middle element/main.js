function gimme(triplet) {
    let max = Math.max(...triplet)
    let min = Math.min(...triplet)
    let middle = triplet.filter(e => e < max && e > min)
    return triplet.indexOf(...middle)
}