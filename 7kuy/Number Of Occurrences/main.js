Array.prototype.numberOfOccurrences = function (num) {
    return this.filter(e => e === num).length
}