import {recibirNumero} from '../../GitHub/js-skill_level-0/back-stage.ts'
import {mayor} from '../../GitHub/js-skill_level-0/back-stage.ts'
import {menor} from '../../GitHub/js-skill_level-0/back-stage.ts'
import {cifras} from '../../GitHub/js-skill_level-0/back-stage.ts'
import {suma_y_diferencia} from '../../GitHub/js-skill_level-0/back-stage.ts'
import {producto_y_cociente} from '../../GitHub/js-skill_level-0/back-stage.ts'

function ejemplo1() {
    var num1 = recibirNumero(), num2 = recibirNumero(), num3 = recibirNumero()
    return document.writeln("El número mayor es: " + mayor(num1, num2, num3) + " " + "El número menor es: " + menor(num1, num2, num3))
}

function ejemplo2() {
    var num = recibirNumero()
    return document.writeln("<h1>La cantidad de cifras es: " + cifras(num) + "</h1>")
}

function ejemplo3() {
    var num1 = recibirNumero(), num2 = recibirNumero()
    return num1 > num2 ? document.writeln("Tu resultado mágico es: " + suma_y_diferencia(num1, num2)) : num1 < num2 ? document.writeln("Tu resultado mágico es: " + producto_y_cociente(num1, num2)) : document.writeln("Los numeros sson iguales, no hay resultado mágico.")
}

ejemplo1()