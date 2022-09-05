const bump = x => x.split('').filter(e => e == 'n').length <= 15 ? 'Woohoo!' : "Car Dead"

// split method
const bump2 = x => x.split('n').length > 16 ? "Car Dead" : "Woohoo!"