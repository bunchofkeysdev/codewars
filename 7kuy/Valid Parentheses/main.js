function validParentheses(parenStr) {
  let parenCounter = 0;
  let result = true;
  parenStr.split("").forEach((e) => {
    if (e == "(") {
      parenCounter++;
    } else {
      parenCounter--;
    }
    if (parenCounter < 0) result = false;
  });
  if (parenCounter !== 0) result = false;
  return result;
}
