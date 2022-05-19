function nextId(ids) {

    return !ids.includes(0) ? 0 : Math.min(
        ...ids.sort((a, b) => a - b)
            .filter((e, i) => (e + 1 !== ids[i + 1] && e !== ids[i + 1]))
    ) + 1;

}