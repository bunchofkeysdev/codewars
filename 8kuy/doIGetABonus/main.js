function bonusTime(salary, bonus) {
    let bonusSalary = salary * 10
    return bonus ? `£${bonusSalary}` : `£${salary}`
}
