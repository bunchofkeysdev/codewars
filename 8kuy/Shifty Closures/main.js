var name = 'Abe';
var greet_abe = function () {
    return "Hello, " + name + '!';
};
var name2 = 'Ben';
var greet_ben = function () {
    return "Hello, " + name2 + '!';
};


// real

var name = 'Abe';
var greet_abe = function () {
    return "Hello, " + name + '!';
};


var greet_ben = function () {
    name = 'Ben';
    return "Hello, " + name + '!';
};