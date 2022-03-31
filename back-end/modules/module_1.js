import {mayor, menor} from '../main/back-stage.ts';

function recibirNumero() {
    let x = prompt("Ingrese un número entero:");
    try {
        x = parseInt(x);
    } 
    catch (error) {
        document.write("El numero no es entero, intente nuevamente.");
        x = null;
    }
    return x != null ? x : recibirNumero();
};

var n1, n2, n3;

n1 = recibirNumero();
n2 = recibirNumero();
n3 = recibirNumero();

const resultado = "El número mayor es: " + mayor(n2, n2, n3) + " " + "El número menor es: " + menor(n1, n2, n3);

document.body.innerHTML = "<p>" + resultado + "</p>" 