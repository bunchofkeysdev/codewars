function find(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return "Not found";
}

// REFACTORED
const find = (array, element) => array.includes(element) ? array.indexOf(element) : "Not found"
