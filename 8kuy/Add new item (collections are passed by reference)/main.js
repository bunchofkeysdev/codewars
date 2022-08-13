function addExtra(listOfNumbers) {
    let num = [13]
    return listOfNumbers.concat(num)
}

function addExtra(listOfNumbers) {
    // your code here
    // add an int to listOfNumbers and return it
    return [...listOfNumbers, 13];
}