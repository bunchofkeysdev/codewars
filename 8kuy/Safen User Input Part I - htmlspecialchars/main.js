function htmlspecialchars(formData) {
    return formData.split('').map(e => {
        if (e === "<") {
            return e = `&lt;`
        } else if (e === '>') {
            return e = `&gt;`
        } else if (e === `"`) {
            return e = `&quot;`
        } else if (e === `&`) {
            return e = `&amp;`
        } else return e
    }).join('')
}

//second

function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}