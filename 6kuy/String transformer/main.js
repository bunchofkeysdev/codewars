const stringTransformer = (str) => str.split(' ').reverse().map(e => e.split('').map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ')


// Better code
function stringTransformer(str) {
    return str
        .split(' ')
        .reverse()
        .join(' ')
        .split('')
        .map(v => v == v.toUpperCase() ?
            v.toLowerCase() :
            v.toUpperCase())
        .join('');
}