const removeDuplicateWords = s => Array.from(new Set(s.split(' '))).join(' ')

// shorter

const removeDuplicateWords2 = s => [...new Set(s.split(' '))].join(' ')