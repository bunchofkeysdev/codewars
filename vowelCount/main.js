function getCount(str) {
    let vowelsCount = 0;
    let arrStr = Array.from(str)

    arrStr.forEach(e => {
        if (e === "a" || e === 'e' || e === 'i' || e === 'o' || e === 'u') {

            vowelsCount++;

        }
    })


    return vowelsCount;
}