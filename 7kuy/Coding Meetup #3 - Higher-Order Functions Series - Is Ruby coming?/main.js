const isRubyComing = list => list.filter(e => e.language === "Ruby").length >= 1

// better
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}