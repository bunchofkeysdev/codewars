function areYouPlayingBanjo(name) {
    let nameLower = name.toLowerCase()
    return nameLower[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}