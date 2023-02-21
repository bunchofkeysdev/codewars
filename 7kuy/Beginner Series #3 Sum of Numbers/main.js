function getSum(a, b) {
  let lowEnd = Math.min(a, b);
  let highEnd = Math.max(a, b);
  var list = [];
  for (var i = lowEnd; i <= highEnd; i++) {
    list.push(i);
  }
  return list.reduce((a, b) => a + b, 0);
}
// refractor
function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
