function generateHashtag(str) {
    let tag = `#${str.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('')}`
    return str.trim() == "" || tag.length > 140 ? false : tag
}