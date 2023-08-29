function cake(x, y) {
  let sum = 0;

  for (let i = 0; i < y.length; i++) {
    if (i % 2 == 0) {
      sum += y.charCodeAt(i);
    } else {
      sum += y.charCodeAt(i) - 96;
    }
  }

  return sum > (x * 70) / 100 ? "Fire!" : "That was close!";
}

function cake(x, y) {
  let sum = 0;

  for (let i = 0; i < y.length; i++) {
    const charCode = y.charCodeAt(i);

    if (i % 2 == 0) {
      sum += charCode;
    } else {
      sum += charCode - 96;
    }
  }

  return sum > (x * 70) / 100 ? "Fire!" : "That was close!";
}
