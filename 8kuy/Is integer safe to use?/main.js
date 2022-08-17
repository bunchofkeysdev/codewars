function SafeInteger(n) {
    return n <= Number.MAX_SAFE_INTEGER
}

// shorter
const SafeInteger = n => n <= Number.MAX_SAFE_INTEGER

// alt
function SafeInteger(n) {
    return Number.isSafeInteger(n);
}

// alt 2
const SafeInteger = n => Number.isSafeInteger(n)
