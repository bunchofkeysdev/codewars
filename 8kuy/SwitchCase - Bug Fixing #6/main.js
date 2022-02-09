function evalObject(value) {
    var result = 0;
    value.a = +value.a
    value.b = +value.b
    switch (value.operation) {
        case '+': result = value.a + value.b; break;
        case '-': result = value.a - value.b; break;
        case '/': result = value.a / value.b; break;
        case '*': result = value.a * value.b; break;
        case '%': result = value.a % value.b; break;
        case '^': result = Math.pow(value.a, value.b);
    }
    return result;
}