function minSum(arr) {
    let newArr = []
    let sortArr = arr.sort((a, b) => a - b)
    for (let i = 0; i < sortArr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(sortArr[i] * sortArr[sortArr.length - 1 - i])
        }
    }
    return newArr.reduce((a, b) => a + b, 0)
}