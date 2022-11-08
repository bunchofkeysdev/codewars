function findDeletedNumber(arr, mixArr) {
    if (arr.length === mixArr.length) {
        return 0
    } else {
        let orderedArr = arr.reduce((a, b) => a + b, 0)
        let mixedArr = mixArr.reduce((a, b) => a + b, 0)
        return orderedArr - mixedArr
    }

}