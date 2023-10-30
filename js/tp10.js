/* 
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.
*/

const numero = parseInt(
  prompt("Escriba un número para verificar si es divisible por 2, 3, 5 o 7")
);
const divisores = '2357';
let divisibles = '';

for (i = 0; i < divisores.length; i++) {
  if (numero % divisores[i] === 0) {
    divisibles = divisibles + divisores[i];
  }
}

if (divisibles !== '') {
  alert(
    "El número que elegiste es divisible por una de las opciones (2,3,5,7)"
  );
} else {
  alert(
    "El número que elegiste no es divisible por una de las opciones (2,3,5,7)"
  );
}
