function sc(floor) {

    return floor <= 1 ? "" : floor <= 6 ? "Aa~ ".repeat(floor - 1) + "Pa! Aa!" : "Aa~ ".repeat(floor - 1) + "Pa!"

}
