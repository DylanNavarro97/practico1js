/* 
Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
 */

alert("Averigüemos que número es más alto")
const numero1 = parseInt(prompt("Escribe el primer número"))
const numero2 = parseInt(prompt("Escribe el segundo número"))
const numeroMasAlto = Math.max(numero1, numero2)
alert(`El número más alto es ${numeroMasAlto}`)