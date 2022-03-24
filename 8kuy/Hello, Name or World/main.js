function hello(name) {
    return name === undefined || name.length < 1 ? 'Hello, World!' : `Hello, ${name = name[0].toUpperCase() + name.slice(1).toLowerCase()}!`


}