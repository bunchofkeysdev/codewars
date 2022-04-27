function solution(str, ending) {
    return str.slice(-ending.length) === ending || ending == ''
}


// second
const solution = (str, ending) => str.slice(-ending.length) === ending || ending == ""

// better
const solution = (str, ending) => str.endsWith(ending)