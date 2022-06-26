function isToday(today) {
    return today.toJSON().slice(0, 10) == new Date().toJSON().slice(0, 10)
}


// SECOND

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}