function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return (enteredCode === correctCode) && (Date.parse(currentDate) <= Date.parse(expirationDate))
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}