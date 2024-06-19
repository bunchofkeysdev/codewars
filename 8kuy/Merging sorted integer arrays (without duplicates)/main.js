function mergeArrays(a, b) {
  return Array.from(new Set(a.concat(b)))
    .map((e) => parseInt(e))
    .sort((a, b) => a - b);
}
