function positiveSum(arr) {
    let total = 0;
    arr.forEach((element) => {
        if (element > 0) {
            total += element
        }
    })
    return (total)

}