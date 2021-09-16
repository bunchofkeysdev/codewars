const cannonsReady = (gunners) => {
    gunners = Object.values(gunners)
    for (let i = 0; i < gunners.length; i++) {
        if (gunners[i] === 'nay') {
            return 'Shiver me timbers!'
        }
    } return 'Fire!'
}