function getMiddle(s) {
    let middle = Math.floor(s.length / 2);

    return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s.slice(middle, middle + 1);
}

// second

function getMiddle(s) {
    return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr((s.length / 2) - 1, 2);
}

    //return s[Math.floor(s.length/2)]
