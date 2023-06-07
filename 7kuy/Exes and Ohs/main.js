function XO(str) {
  let x = [];
  let o = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      x.push(str[i]);
    } else if (str[i] === "o" || str[i] === "O") {
      o.push(str[i]);
    }
  }
  return x.length === o.length;
}
// reformatted
function XO(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") sum++;
    if (str[i].toLowerCase() == "o") sum--;
  }
  return sum == 0;
}
