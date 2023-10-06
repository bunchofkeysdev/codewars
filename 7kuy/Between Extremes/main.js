function betweenExtremes(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let length = numbers.length - 1;
  return numbers[length] - numbers[0];
}
