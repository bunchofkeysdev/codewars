function solution(pairs) {
    let arr = []
    for (const property in pairs) {
        arr.push((`${property} = ${pairs[property]}`));
    }
    return arr.join(',')
}