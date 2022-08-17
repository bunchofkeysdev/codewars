function SafeInteger(n) {
    return n <= Number.MAX_SAFE_INTEGER
}

// shorter
const SafeInteger = n => n <= Number.MAX_SAFE_INTEGER