class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName,
            this.lastName = lastName,
            this.gender = gender,
            this.age = age
    } sayFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`
    }
}