function validateHello(greetings) {
    greetings = greetings.toLowerCase()
    return greetings.includes('hello') || greetings.includes('ciao') || greetings.includes('salut') || greetings.includes('hallo') || greetings.includes('hola') || greetings.includes('ahoj') || greetings.includes('czesc')

}

// second

const hellos = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish',
}

const validateHello = greetings => {
    for (key in hellos) {
        if (greetings.toLowerCase().includes(key)) {
            return true
        }
    }
    return false
}