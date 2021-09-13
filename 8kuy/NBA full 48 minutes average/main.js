function pointsPer48(ppg, mpg) {
    return mpg === 0 ? 0 : +((ppg * 48) / mpg).toFixed(1)
}