function cake(x, y) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < y.length; i++) {
    if (i % 2 == 0) {
      sum += y.charCodeAt(i);
      arr.push(y.charCodeAt(i));
    } else {
      sum += y.charCodeAt(i) - 96;
      arr.push(y.charCodeAt(i) - 96);
    }
  }

  return sum > (x * 70) / 100 ? "Fire!" : "That was close!";
}
