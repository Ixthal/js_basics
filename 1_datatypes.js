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
/*ahora comparar el contenido de dichos arrays utilizando un bucle
se setea a true y se comprueba 1 a 1 si son diferentes. En el momento en que 1 sea diferente sale por el break e imprime false*/
var array = [1,2,3,4];
var array2 = [1,2,3,4]; 
var sonIguales = true;
for (let i = 0; i < array.length; i++) {
    if(array[i] != array2[i]){
        sonIguales = false;
        break;
    }
}
console.log("Los arrays son: " + sonIguales);
// crear un objeto "usuario", con tres propiedades
var coche = new Object();
coche.marca = "Maserati";
coche.modelo = "S";
coche.matricula = "1234ABC";
console.log(coche);
console.log(coche.marca);

var usuario = {
    nombre: "Pepe",
    apellido: "Perez",
    email: "ejemplo@ejemplo.com",
};
console.log(usuario);
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
//incrementar una variable con otra variable o número con el operador  +=, mostrar por pantalla la primera variable (la incrementada)
var operando1 = 8;
var operando2 = 4;
operando1 += operando2;
console.log("El operando es: " + operando1);
//eleva un número a otro utilizando **
console.log("Elevado: " + operando1**operando2);
//eleva un número a otro utilizando un bucle
var base = 3;
var exponente = 4;
var resultado = 1;
for (let i = 0; i < exponente; i++) {
    resultado *= base;
}
console.log("Elevado con bucle es: " + resultado);
// generar un número aleatorio del 0 al 100
var numeroAleatorio = Math.random()*101;
console.log("El numero aleatorio es: " + numeroAleatorio.toFixed(2));
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
var arrayAleatorio=[];
var max=0;
var min=100;
    for (let i = 0; i < 10; i++) {
        var num=Math.random()*100
        arrayAleatorio[i]=num;
        
        if (max<num) {
            max=num;
        }
        if (min>num) {
            min=num
        }
    }
    console.log("maximo"+max+"\nminimo "+min)
// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
console.log("El numero mayor con Math es: " + Math.max.apply(null, arrayAleatorio));
console.log("El numero menor con Math es: " + Math.min(...arrayAleatorio));
/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
const frase = "Pascal es un lenguaje de programación moderno";
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
console.log(frase.replace('Pascal','Java'));
//crear una variable con frase/cadena de caracteres y comprobar la longitud
console.log(frase.length);
//eliminar "script" de la palabra Javascript con el método substr
var cadena = "Javascript";
console.log(cadena.substr(-10,4));
//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
console.log('Espero que esto me sirva para algo'.includes('algo'));