function removeUrlAnchor(url) {
    return url.includes('#') ? url.slice(0, url.indexOf('#')) : url
}

// shorter

function removeUrlAnchor(url) {
    return url.split('#')[0];
}