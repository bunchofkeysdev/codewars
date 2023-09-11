function findMissing(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return arr1[i];
    }
  }
}

//   second
function findMissing(arr1, arr2) {
  return arr1.reduce((a, b) => a + b, 0) - arr2.reduce((a, b) => a + b, 0);
}
