function swap(string) {
  const newString = string.split("").map((e) => {
    if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
      return e.toUpperCase();
    } else {
      return e;
    }
  });
  return newString.join("");
}
