function abbrevName(name) {
    name = name.toUpperCase()
    let arrName = name.split(' ')
    return `${arrName[0][0]}.${arrName[1][0]}`


}