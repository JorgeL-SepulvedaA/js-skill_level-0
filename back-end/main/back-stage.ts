function mayor(a: number, b: number, c: number) {
    return a > b && a > c ? a.toString() : c > b && c > a ? c.toString() : b.toString();
};

function menor(a: number, b: number, c: number) {
    return a < b && a < c ? a.toString() : c < b && c < a ? c.toString() : b.toString();
};

function cifras(a:number) {
    return a.toString().length;
};

function suma_y_diferencia(a: number, b: number) {
    return `Suma: ${(a + b).toString()}` + "\n" + `Diferencia: ${(a - b).toString()}`;
};

function producto_y_cociente(a: number, b: number) {
    return `Producto: ${(a * b).toString()}` + "\n" + `Cociente: ${(a / b).toString()}`;
};

export { mayor, menor, cifras, suma_y_diferencia, producto_y_cociente };