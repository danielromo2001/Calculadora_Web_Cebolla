export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b == 0) {
        return "Error: Division por 0 no es valida";
    } else {
        return a / b;
    }
}