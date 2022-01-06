function noBoringZeros(number) {
    while (number % 10 === 0 && number !== 0) {
        number = number / 10;
    }
    return number;
}