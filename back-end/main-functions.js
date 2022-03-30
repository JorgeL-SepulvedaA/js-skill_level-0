import {mayor, menor, cifras, suma_y_diferencia, producto_y_cociente} from '../../GitHub/js-skill_level-0/back-stage.ts';
        
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

        function ejemplo3() {
            var num1 = recibirNumero(), num2 = recibirNumero()
            return num1 > num2 ? document.writeln("Tu resultado mágico es: " + suma_y_diferencia(num1, num2)) : num1 < num2 ? document.writeln("Tu resultado mágico es: " + producto_y_cociente(num1, num2)) : document.writeln("Los numeros sson iguales, no hay resultado mágico.")
        }
        
        ejemplo1()
        
        import {mayor, menor, cifras, suma_y_diferencia, producto_y_cociente} from '../js-skill_level-0/back-end/main/back-stage.ts';
        
        function recibirNumero() {
            let x;
            try {
                x = parseInt(prompt("Ingrese un número entero:"));
            } 
            catch (error) {
                document.write("El numero no es entero, intente nuevamente.");
                x = null;
            }
            return x != null ? x : recibirNumero();
        };

        function ejemplo1() {
            let num1 = recibirNumero(), num2 = recibirNumero(), num3 = recibirNumero();
            return "El número mayor es: " + mayor(num1, num2, num3) + " " + "El número menor es: " + menor(num1, num2, num3);
            
        };

        //const module = ejemplo1();

        document.write(ejemplo1());