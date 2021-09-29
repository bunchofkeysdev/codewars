function stairsIn20(s) {
    return s.join(',').split(',').reduce((a, b) => +a + +b, 0) * 20
}