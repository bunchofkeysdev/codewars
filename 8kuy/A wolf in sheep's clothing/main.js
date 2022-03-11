function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;


}

// Second

function warnTheSheep(queue) {
    queue = queue.reverse()

    for (let i = 0; i < queue.length; i++) {
        if ('wolf' === queue[0]) {
            return "Pls go away and stop eating my sheep"
        } else {
            return `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
        }
    }


}