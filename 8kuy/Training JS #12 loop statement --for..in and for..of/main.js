function giveMeFive(obj) {
    let theArray = []
    for (let key in obj) {
        if (key.length === 5) {
            theArray.push(key)
        }
        if (obj[key].length === 5) {
            theArray.push(obj[key])
        }

    }
    return theArray
}