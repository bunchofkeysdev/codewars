function nameShuffler(str) {
    return str.replace(/(\D+)\s(\D+)/, '$2 $1')
}