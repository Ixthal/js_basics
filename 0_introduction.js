console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

//Crear una variable para almacenar tu nombre
var nombre = "Hugo";
//Crear una variable para almacenar tus apellidos
var apellidos = "Sanchez Garcia";
//Crear una variable para almacenar tu edad
var edad = 16;
//Almacenar en una constante tu nombre y apellidos
var nombreApellidos = nombre + " " + apellidos;
//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log("Mi nombre es: " + nombreApellidos);
//Muestra por pantalla el valor de una constante vacía
const VACIA = null;
console.log(VACIA);
//Muestra por pantalla el valor de una constante sin definir
var undefined;
console.log(undefined);
//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
nombreApellidos = "Hugo SG";
console.log(nombreApellidos);
//Comprueba el tipo de dato de la variable con tu edad
console.log("El tipo de dato de mi edad es: " + typeof edad);
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad = false;
if(edad >= 18){
    mayorDeEdad = true;
}
console.log(mayorDeEdad);
//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mayorDeEdad1 = false;
if(edad >= 18){
    mayorDeEdad = edad;
}
console.log(mayorDeEdad);
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var numero1 = 2;
var numero2 = 3; 
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicacion: " + multiplicacion);
console.log("Division: " + division);
//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
 var Operaciones = ['+','-','*','/'];
 var resultado = "";
 for(elemento of Operaciones){
     switch (elemento) {
         case '+':
             resultado = 'Suma: ' + (numero1 + numero2);
             break;
        case '-':
            resultado = 'Resta: ' + (numero1 - numero2);
            break;
        case '*':
            resultado = 'Multiplicacion: ' + (numero1 * numero2);
            break;
        case '/':
            resultado = 'Division: ' + (numero1 / numero2);
            break;
         default:
             break;
     }
     console.log("Resultado: " + resultado);
 }
//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
var altura = 2;
var base = 3; 
var area = (base * altura) / 2;
console.log("El area del triangulo es: " + area);
//Calcular el área de una circunferencia para un radio dado
var radio = 8;
var calculaCircunferencia = 2 * Math.PI * radio;  
console.log("El area de la circunferencia es: " + calculaCircunferencia);
//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores
var altura = 8;
const GRAVEDAD = 9.8;
var tiempoCaidaLibre = Math.sqrt(2*altura/GRAVEDAD) 
console.log("El tiempo de caida es: " +tiempoCaidaLibre)
//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
const DIAMETROTIERRA = 12742000;
const DIAMETROLUNA = 3474800;
var volumenTierra = (4/3) * Math.PI * Math.pow(DIAMETROTIERRA/2, 3);
var volumenLuna = (4/3) * Math.PI * Math.pow(DIAMETROLUNA/2, 3);
var vecesMasGrandeTierraQueLuna = volumenTierra / volumenLuna;
console.log("La Tierra es " + vecesMasGrandeTierraQueLuna + " que la Luna");
