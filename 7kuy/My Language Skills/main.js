function myLanguages(obj) {
    let result = [];
    for (let i in obj) {
        if (obj[i] > 59) {
            result.push(i);
        }
    }
    return result.sort((a, b) => obj[b] - obj[a]);
}