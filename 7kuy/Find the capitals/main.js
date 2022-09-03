var capitals = function (word) {

    return word.split('').filter(e => e == e.toUpperCase()).map(e => word.indexOf(e))
};