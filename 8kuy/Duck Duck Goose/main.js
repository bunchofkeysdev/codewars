function duckDuckGoose(players, goose) {
    goose = goose - 1
    while (goose > players.length - 1) {
        goose -= players.length
    } return players[goose].name
}