function slope([x1, y1, x2, y2]) {
    let result = (y2 - y1) / (x2 - x1);
    return isFinite(result) ? `${result}` : 'undefined'
}