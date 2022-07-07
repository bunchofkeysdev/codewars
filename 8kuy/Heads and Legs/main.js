function animals(heads, legs) {
    const cows = legs / 2 - heads
    const chickens = heads - cows
    return (cows < 0 || chickens < 0) || (cows != cows.toFixed() || chickens != chickens.toFixed()) ? "No solutions" : [chickens, cows]
}