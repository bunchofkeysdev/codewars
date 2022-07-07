function splitAndMerge(string, separator) {
    return string.split(' ').map(e => e.split("").join(separator)).join(" ")
}

// second

function splitAndMerge(str, sp) {
    var words = str.split(" ");
    var arr = [];
    var res = []
    for (i = 0; i < words.length; i++) {
        arr.push(words[i].split("").join(sp));
    }
    res = arr.join(" ");
    return res;

}