function getFirstPython(list) {
    let arr = list.filter((e, i) => e.language === 'Python')
    return arr.length < 1 ? `There will be no Python developers` : `${arr[0].firstName}, ${arr[0].country}`
}