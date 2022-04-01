function startingMark(bodyHeight) {
    const mark = (10.67 - 9.45) / (1.83 - 1.52)
    return Math.round((mark * bodyHeight + 10.67 - mark * 1.83) * 100) / 100
}