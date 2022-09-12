function removeSmallest(numbers) {
    let newNum = [...numbers]
    let small = numbers.indexOf(Math.min(...numbers))
    newNum.splice(small,1)
    return newNum
  }