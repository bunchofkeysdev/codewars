// first

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}


//   second

var Ball = function (ballType = 'regular') {
    return this.ballType = ballType
}

// thiird

var Ball = function (ballType) {
    return this.ballType = ballType || 'regular'
}

//    fourth

var Ball = function (ballType) {
    return ballType === undefined ? this.ballType = 'regular' : this.ballType = 'super'
};