function consonantCount(str) {
  return str
    .toLowerCase()
    .split("")
    .filter(
      (e, i) =>
        e !== "a" &&
        e !== "e" &&
        e !== "i" &&
        e !== "o" &&
        e !== "u" &&
        /[a-z]/.test(e)
    ).length;
}
