function fiveLine(s) {
    s = s.trim()
    return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`

}

// Better
function fiveLine(s) {
    //coding here...
    s = s.trim();
    var tmp = s;
    var res = [s];

    for (var i = 1; i < 5; i++) {
        res.push(s += tmp);
    }
    return res.join("\n");
}