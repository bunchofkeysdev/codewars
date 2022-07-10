function datingRange(age) {
    let min = Math.floor((age / 2) + 7)
    let max = Math.floor((age - 7) * 2)
    let min2 = Math.floor(age - 0.10 * age)
    let max2 = Math.floor(age + 0.10 * age)
    return age <= 14 ? `${min2}-${max2}` : `${min}-${max}`
}