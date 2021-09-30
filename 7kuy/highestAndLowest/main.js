function highAndLow(numbers) {

    let arrNum = []
    numbers.split(' ').forEach(e => arrNum.push(Number(e)))
    arrNum.sort((a, b) => a - b)
    return `${arrNum[arrNum.length - 1]} ${arrNum[0]}`
}
