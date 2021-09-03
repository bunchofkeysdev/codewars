function HQ9(code) {
    let string = `99 bottles of beer on the wall, 99 bottles of beer.
  Take one down and pass it around, `
    if (code === 'H') {
        return 'Hello World!'
    } else if (code === 'Q') {
        return 'Q'
    } else if (code === '9') {
        for (let i = 98; i > 1; i--) {
            string += `${i} bottles of beer on the wall.
  ${i} bottles of beer on the wall, ${i} bottles of beer.
  Take one down and pass it around, `
        }
        string += `1 bottle of beer on the wall.
  1 bottle of beer on the wall, 1 bottle of beer.
  Take one down and pass it around, no more bottles of beer on the wall.
  No more bottles of beer on the wall, no more bottles of beer.
  Go to the store and buy some more, 99 bottles of beer on the wall.`
        return string
    }
}