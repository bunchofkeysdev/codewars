function sentence(arrayOfObjects) {
  const str = arrayOfObjects
    .sort((a, b) => {
      let numA = Object.keys(a);
      let numB = Object.keys(b);
      return numA - numB;
    })
    .map((e) => Object.values(e))
    .join(" ");
  return str;
}
