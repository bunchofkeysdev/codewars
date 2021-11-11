function eachCons(array, n) {
    return array.map((e, i) => array.slice(i, i + n)).filter(e => e.length == n)

}

// second

function eachCons(array, n) {
    let res = [];

    for (let i = 0; i < array.length; i++) {
        res.push(array.slice(i, i + n));
    }

    return res.filter(e => e.length === n);
}