function fakeBin(x) {
    let temp = [];
    for (let i = 0; i < x.length; i++) {
        (x[i] < 5) ? temp[i] = 0 : temp[i] = 1;
    }
    return temp.join('');


}