function sameCase(a, b) {
    let regex = /[a-z]/i;
    if (!regex.test(a) || !regex.test(b)) {
        return -1
    } if ((a.toLowerCase() === a && b.toLowerCase() === b) || (a.toUpperCase() === a && b.toUpperCase() === b)) {
        return 1
    } else { return 0 }
}