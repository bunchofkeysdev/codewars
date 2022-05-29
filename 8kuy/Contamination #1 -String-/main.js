function contamination(text, char) {
    return text.replace(text, char.repeat(text.length))
}