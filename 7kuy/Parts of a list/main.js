function partlist(arr) {
    let array = []

    for (let i = 1; i < arr.length; i++) {
        let front = arr.slice(0, i).join(' ')
        let back = arr.slice(i).join(' ')
        array.push([front, back])
    }
    return array
}