var isAnagram = function (test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')

    return test == original

};


// Noice
String.prototype.sortLetters = function () {
    return this.toLowerCase().split('').sort().join('');
}

var isAnagram = function (test, original) {
    return test.sortLetters() == original.sortLetters();
};