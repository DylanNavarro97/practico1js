/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

alert("Averigüemos que número es más alto")
const numero1 = parseInt(prompt("Escribe el primer número"))
const numero2 = parseInt(prompt("Escribe el segundo número"))
const numero3 = parseInt(prompt("Escribe el tercer número"))
const numeroMasAlto = Math.max(numero1, numero2)
document.write(`<h1>El número más alto es: ${numeroMasAlto}</h1>`)