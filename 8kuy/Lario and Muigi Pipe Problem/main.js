function pipeFix(numbers) {
    let outPut = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        outPut.push(i)
    }
    return outPut
}