function rowWeights(array) {
    let newArray = [0, 0]
    if (array.length === 1) {
        return [array[0], 0]
    } else if (array.length === 2) {
        return array
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i % 2 === 0) {
                newArray[0] += array[i]
            } else {
                newArray[1] += array[i]
            }
        } return newArray
    }
}

// refactored 
function rowWeights(array) {
    let newArray = [0, 0]

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[0] += array[i]
        } else {
            newArray[1] += array[i]
        }
    } return newArray

}

// rerefactored
function rowWeights(array) {
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
        i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}