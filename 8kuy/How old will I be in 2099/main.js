function calculateAge(birth, future) {
    let age = future - birth;
    if (age === 1) {
        return `You are ${age} year old.`
    } else if (age === -1) {
        return `You will be born in ${Math.abs(age)} year.`
    }
    if (birth < future) {
        return `You are ${age} years old.`
    } else if (future < birth) {
        return `You will be born in ${Math.abs(age)} years.`
    } else return `You were born this very year!`


}
