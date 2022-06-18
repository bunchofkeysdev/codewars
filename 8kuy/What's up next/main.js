function nextItem(xs, item) {
    let found = false
    let value

    for (const i of xs) {
        if (found) {
            value = i
            break
        }

        if (i === item) found = true
    }

    return value
}