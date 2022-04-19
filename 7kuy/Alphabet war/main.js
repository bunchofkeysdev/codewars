function alphabetWar(fight) {
    fight = fight.split('')
    let left = []
    let right = []

    fight.forEach(e => {

        switch (e) {
            case 'w':
                left.push(4)
                break;
            case 'p': left.push(3)
                break;
            case 'b': left.push(2)
                break;
            case 's': left.push(1)
                break;
            case 'm':
                right.push(4)
                break;
            case 'q': right.push(3)
                break;
            case 'd': right.push(2)
                break;
            case 'z': right.push(1)
                break;
        }



    })
    return left.reduce((a, b) => a + b, 0) < right.reduce((a, b) => a + b, 0) ?
        "Right side wins!" : left.reduce((a, b) => a + b, 0) === right.reduce((a, b) => a + b, 0) ? "Let's fight again!" : "Left side wins!"
}