function aspectRatio(x, y) {
    return [Math.ceil(y * (16 / 9)), y]
}

// longer

function aspectRatio(x, y) {
    let result = [];

    x = Math.ceil(y * 1.77777777);

    result.push(x, y);
    return result;
}