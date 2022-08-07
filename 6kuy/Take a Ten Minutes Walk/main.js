function isValidWalk(walk) {
    let ns = 0;
    let ew = 0;

    walk.forEach(e => {
        if (e === 'n') {
            ns++
        } else if (e === 's') {
            ns--
        } else if (e === 'e') {
            ew++
        } else {
            ew--
        }
    })

    return walk.length === 10 && (ns === 0 && ew === 0)
}