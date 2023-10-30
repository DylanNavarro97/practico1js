/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt */


const numero1 = parseInt(prompt("Escribe el primer número para realizar la suma"))
const numero2 = parseInt(prompt("Escribe el segundo número para realizar la suma"))
document.write("El resultado de la suma entre " + numero1 + " y " + numero2 + " es: " + (numero1 + numero2))