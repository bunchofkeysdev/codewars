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
//Refactored

function sentence(arrayOfObjects) {
  const str = arrayOfObjects
    .sort((a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]))
    .map((e) => Object.values(e)[0])
    .join(" ");
  return str;
}
