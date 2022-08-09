function cutIt(arr) {
    let arr2 = [...arr]
    let small = arr2.sort((e, b) => e.length - b.length).shift().length
    return arr.map(e => e.slice(0, small))

}