function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : !win && lastPlayer === 'black' ? 'white' : 'black'


}

// second

function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer == "white" ? "black" : "white"
}