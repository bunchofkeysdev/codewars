function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : !win && lastPlayer === 'black' ? 'white' : 'black'


}