function aliasGen(a, b) {
    if (a.charAt(0) == +a.charAt(0) || b.charAt(0) == +b.charAt(0)) {
        return "Your name must start with a letter from A - Z."
    }
    a = a.charAt(0).toUpperCase()
    b = b.charAt(0).toUpperCase()

    return `${firstName[a]} ${surname[b]}`

}