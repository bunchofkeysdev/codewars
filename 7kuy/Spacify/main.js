function spacify(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        newStr += `${str[i]} `
    }
    return newStr.trimEnd()
}

// better
const spacify = str => [...str].join(' ');