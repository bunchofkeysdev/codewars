function triangle(row) {

    if (row.length === 1) {
        return row
    } else {
        let newRow = ''
        for (let i = 0; i < row.length; i++) {
            if (row[i] === row[i + 1]) {
                newRow += row[i]
            } else if ((row[i] === 'B' && row[i + 1] === 'G') || (row[i] === 'G' && row[i + 1] === 'B')) {
                newRow += 'R'
            } else if ((row[i] === 'R' && row[i + 1] === 'G') || (row[i] === 'G' && row[i + 1] === 'R')) {
                newRow += 'B'
            } else if ((row[i] === 'B' && row[i + 1] === 'R') || (row[i] === 'R' && row[i + 1] === 'B')) {
                newRow += 'G'
            }
        } return triangle(newRow)
    }

}

