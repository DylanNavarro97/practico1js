/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

const numero = parseInt(prompt("Escribe un numero para saber si es divisible por 2"))
function esDivisible() {
    resto = numero % 2
    if(resto === 0){
        alert("El número es divisible por 2")
    } else {
        alert("El número no es divisible por 2")
    }
}
esDivisible()