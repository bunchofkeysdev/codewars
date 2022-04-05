function capitalize(s) {
    let arr1 = []
    let arr2 = []
    s.split('').forEach((e, i) => {
        if (i % 2 === 0) {
            arr1.push(e.toUpperCase())
            arr2.push(e)
        } else {
            arr2.push(e.toUpperCase())
            arr1.push(e)
        }
    })
    return [arr1.join(''), arr2.join('')]
}

// shorter

function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};