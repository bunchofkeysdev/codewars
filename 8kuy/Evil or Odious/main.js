function evil(n) {
    const total = n.toString(2).split('').reduce((total, binary) => total + Number(binary), 0)
    return total % 2 === 0 ? "It's Evil!" : "It's Odious!"
}