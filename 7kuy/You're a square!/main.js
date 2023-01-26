var isSquare = function (n) {
  return Math.sqrt(n) === Math.trunc(Math.sqrt(n));
};

// formatted

const isSquare = (n) => Number.isInteger(Math.sqrt(n));
