function neutralise(s1, s2) {
  let newArr = [];
  for (let i = 0; i <= s1.length; i++) {
    if (s1[i] == s2[i]) {
      newArr.push(s1[i]);
    } else {
      newArr.push("0");
    }
  }
  return newArr.join("");
}
// REFACTORED #ONE LINE
const neutralise = (s1, s2) => {
  s1.split("")
    .map((x, i) => (x == s2[i] ? x : "0"))
    .join("");
};
