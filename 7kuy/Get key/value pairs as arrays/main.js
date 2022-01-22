function keysAndValues(data) {
    let keyArray = []
    let valueArray = []
    for (let key in data) {
        keyArray.push(key)
        valueArray.push(data[key])
    }
    return [keyArray, valueArray]
}

// second
function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}