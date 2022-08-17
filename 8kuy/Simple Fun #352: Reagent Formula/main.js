function isValid(formula) {
    const firstRule = !(formula.includes(1) && formula.includes(2))
    const secondRule = !(formula.includes(3) && formula.includes(4))
    const thirdRule = formula.includes(5) === formula.includes(6)
    const fourthRule = formula.includes(7) || formula.includes(8)

    return firstRule && secondRule && thirdRule && fourthRule

}

// shorter
isValid = a => !(a.includes(1) && a.includes(2)) &&
    !(a.includes(3) && a.includes(4)) &&
    a.includes(5) === a.includes(6) &&
    (a.includes(7) || a.includes(8));