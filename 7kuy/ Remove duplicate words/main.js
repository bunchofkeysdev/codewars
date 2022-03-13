const removeDuplicateWords = s => Array.from(new Set(s.split(' '))).join(' ')

// shorter

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')