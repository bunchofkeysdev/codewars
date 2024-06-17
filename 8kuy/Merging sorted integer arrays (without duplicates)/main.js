function mergeArrays(a, b) {
  return Array.from(new Set(a.concat(b))).sort((a, b) => a - b);
}

// Refactored

const mergeArrays = (a, b) => [...new Set(a.concat(b))].sort((a, b) => a - b);
