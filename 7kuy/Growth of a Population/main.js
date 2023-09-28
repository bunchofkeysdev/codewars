function nbYear(p0, percent, aug, p) {
  let x = 0;
  let n = 0;
  while (x < p) {
    x = p0 + p0 * (percent / 100) + aug;
    n++;
  }
  return n;
}
