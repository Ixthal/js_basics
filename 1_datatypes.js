console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
let variable = "A";
let variable2 = "A";
if(variable == variable2){
    console.log("Son iguales");
}
//crear dos variables con el distinto contenido y comparar si ambas son iguales
let a1 = "A";
let a2 = "B";
console.log(a1 === a2)
//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
///si tienes 3 iguales tiene que ser estricto, es decir "12" y "12", si uno es "12" y el otro es 12, no es igual estrictamente
let string = "12";
let numero = 12;
console.log(string == numero)
//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
string = "12";
numero = 12;
console.log(string == numero)
//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
///no funciona con console.log(array == array2) ya que compara dos espacios de memoria
var array = [1,2,3,4]
var array2 = [1,2,3,4]
for (let i = 0; i < array.length; i++) {
    console.log("Array: " + array[i]);
    console.log("Array2: " + array2[i]);
}
// crear un objeto "usuario", con tres propiedades
var coche = new Object;
coche.marca = "Maserati";
coche.modelo = "S";
coche.matricula = "1234ABC";
/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
const GRAVEDAD = 9.80665;
Math.round(GRAVEDAD);
console.log(Math.round(GRAVEDAD));
//incrementar una variable con otra variable con el operador  +=
var h1 = 12;
var h2 = 3;
h1 += h2;
console.log("Suma: " + h1);
//eleva un número a otro utilizando **
console.log("Elevado: " + h1**h2);
//eleva un número a otro utilizando un bucle
var base = 3;
var exponente = 4;
for (let i = 0; i < ; i++) {
    h2 *= h3;
}
console.log("Elevado con bucle es: " + h2);
// generar un número aleatorio del 0 al 100

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"

//crear una variable con frase/cadena de caracteres y comprobar la longitud

//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
