class Ghost {
    constructor() {
        this._color = ['white', 'yellow', 'purple', 'red']
    }
    get color() {
        const random = Math.floor(Math.random() * this._color.length)
        return this._color[random]
    }
}