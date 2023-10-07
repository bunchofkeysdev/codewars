function betweenExtremes(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let length = numbers.length - 1;
  return numbers[length] - numbers[0];
}

function betweenExtremes(numbers) {
  let maxNum = Math.max(...numbers);
  let minNum = Math.min(...numbers);
  return maxNum - minNum;
}
