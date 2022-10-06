function sortMyString(S) {
    let s = S.split('')
    return `${s.filter((e, i) => i % 2 === 0).join('')} ${s.filter((e, i) => i % 2 !== 0).join('')}`;
}