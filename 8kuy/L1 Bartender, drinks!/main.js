const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"

//   second

function getDrinkByProfession(param) {
    param = param.toLowerCase()
    if (param === 'jabroni') {
        return 'Patron Tequila'
    } else if (param === 'school counselor') {
        return 'Anything with Alcohol'
    } else if (param === 'programmer') {
        return 'Hipster Craft Beer'
    } else if (param === 'bike gang member') {
        return 'Moonshine'
    } else if (param === 'politician') {
        return 'Your tax dollars'
    } else if (param === 'rapper') {
        return 'Cristal'
    } else return 'Beer'
}