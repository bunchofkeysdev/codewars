function well(x) {
    let numberOfGood = (x.filter(e => e === 'good').length);
    if (numberOfGood > 2) return 'I smell a series!'
    else if (numberOfGood >= 1) return 'Publish!'
    else return 'Fail!'
}