function findOdd(a) {
  var count = {};
  a.forEach((s) => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return +Object.keys(count).find((key) => count[key] % 2 === 1);
}
