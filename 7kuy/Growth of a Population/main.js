function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    n++;
  }
  return n;
}
