import {cifras} from '../main/back-stage.ts';

function recibirNumero(){
    let x;
    try {
        x = parseInt(prompt("Ingrese un número entero:"))
    } catch (error) {
        document.writeln("El numero no es entero, intente nuevamente.")
        x = null
    }
    return x != null ? x : recibirNumero();
};

export default {
    ejemplo2() {
        let num = recibirNumero();
        return document.writeln("<h1>La cantidad de cifras es: " + cifras(num) + "</h1>");
    }
};