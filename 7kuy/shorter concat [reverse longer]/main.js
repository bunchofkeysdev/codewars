const shorter_reverse_longer = (a, b) => a.length < b.length ?
    `${a}${[...b].reverse().join('')}${a}`
    : `${b}${[...a].reverse().join('')}${b}`
